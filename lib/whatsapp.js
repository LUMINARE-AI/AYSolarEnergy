/** WhatsApp (India): 98872 70041 */
export const WHATSAPP_PHONE_E164 = '919887270041';

export function whatsappUrl(text = '') {
  const base = `https://wa.me/${WHATSAPP_PHONE_E164}`;
  if (!text || typeof text !== 'string') return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const WA_RENT_WAITLIST =
  'Hi AY Solar Energy, I would like to join the Rent A Roof early access waitlist.';

export const WA_RENT_ROOF =
  'Hi AY Solar Energy, I want to list my roof for Rent A Roof (VNM / GNM).';

export const WA_DIGITAL_SOLAR_CONSULT =
  'Hi AY Solar Energy, I want a free consultation for Digital Solar — reserve capacity / bill savings (Jaipur or Tonk).';
