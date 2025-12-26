import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { base = 'USD' } = await req.json().catch(() => ({}));
    
    console.log(`Fetching exchange rates for base currency: ${base}`);

    // Using the free ExchangeRate-API (no API key required for basic usage)
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${base}`
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    console.log(`Successfully fetched rates for ${Object.keys(data.rates).length} currencies`);

    return new Response(JSON.stringify({
      base: data.base,
      date: data.date,
      rates: data.rates,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching exchange rates:', errorMessage);
    return new Response(JSON.stringify({ 
      error: errorMessage,
      fallback: true 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
