export function sendEmail(data) {
    const apiEndpoint = '/api/email';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Server responded with an error');
        }
        return res.json();
      })
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
  }