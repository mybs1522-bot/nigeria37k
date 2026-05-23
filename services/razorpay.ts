export const openSelarCheckout = ({
  email,
  name,
}: {
  email: string;
  name?: string;
}) => {
  const baseUrl = 'https://selar.com/xofm2g7c71';
  const params = new URLSearchParams();
  params.set('quickcheckout', '1');
  if (email) params.set('email', email);
  if (name) params.set('fullname', name);
  params.set('currency', 'NGN');
  
  const checkoutUrl = `${baseUrl}?${params.toString()}`;
  window.open(checkoutUrl, '_blank');
};
