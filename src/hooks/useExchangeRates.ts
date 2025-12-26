import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { mockRates, mockChanges } from "@/lib/currencies";

interface ExchangeRatesData {
  rates: Record<string, number>;
  changes: Record<string, number>;
  lastUpdated: Date;
  isLoading: boolean;
  error: string | null;
  isLive: boolean;
}

export const useExchangeRates = (baseCurrency: string) => {
  const [data, setData] = useState<ExchangeRatesData>({
    rates: mockRates,
    changes: mockChanges,
    lastUpdated: new Date(),
    isLoading: true,
    error: null,
    isLive: false,
  });

  const fetchRates = useCallback(async () => {
    setData(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const { data: response, error } = await supabase.functions.invoke('get-exchange-rates', {
        body: { base: baseCurrency }
      });

      if (error) throw error;
      
      if (response.fallback) {
        throw new Error(response.error || 'Using fallback rates');
      }

      // Convert rates relative to base currency
      const rates: Record<string, number> = {};
      Object.keys(response.rates).forEach(currency => {
        rates[currency] = response.rates[currency];
      });

      // Generate random changes for demo (in production, you'd compare with previous rates)
      const changes: Record<string, number> = {};
      Object.keys(rates).forEach(currency => {
        changes[currency] = (Math.random() - 0.5) * 1.5;
      });
      changes[baseCurrency] = 0;

      setData({
        rates,
        changes,
        lastUpdated: new Date(),
        isLoading: false,
        error: null,
        isLive: true,
      });
    } catch (error) {
      console.error('Failed to fetch live rates:', error);
      
      // Fall back to mock data
      setData({
        rates: mockRates,
        changes: mockChanges,
        lastUpdated: new Date(),
        isLoading: false,
        error: 'Using demo rates',
        isLive: false,
      });
    }
  }, [baseCurrency]);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return { ...data, refresh: fetchRates };
};
