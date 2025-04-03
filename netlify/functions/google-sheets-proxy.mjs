import fetch from 'node-fetch';

export const handler = async (event, context) => {
  const googleSheetsScriptURL = 'https://script.google.com/macros/s/AKfycbx-bCmFUgIR_rZS8TbVgvxceGU-aWlVi0v67fV4M90Z9nAzPVHz9PsbTqQvQtQMiIdZ/exec'; // Sostituisci con il tuo URL

  if (event.httpMethod === 'OPTIONS') {
    // Rispondi alla preflight request
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*', // O il tuo dominio Netlify specifico
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
        'Access-Control-Max-Age': '86400', // Cache preflight per 24 ore
      },
    };
  }

  if (event.httpMethod === 'POST') {
    try {
      const response = await fetch(googleSheetsScriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: event.body,
      });
      const data = await response.json();
      return {
        statusCode: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // O il tuo dominio Netlify specifico
        },
        body: JSON.stringify(data),
      };
    } catch (error) {
      console.error('Errore durante la chiamata a Google Apps Script:', error);
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // O il tuo dominio Netlify specifico
        },
        body: JSON.stringify({ error: 'Errore interno del server' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed',
  };
};