export default function authHeader() {
    const customer_id = JSON.parse(localStorage.getItem('user'));
  
    if (customer_id && customer_id.results) {
      return {'authorization':customer_id.results };
    } else {
      return {};
    }
  }