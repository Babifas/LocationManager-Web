export const loadGoogleMapsScript = () => {
    return new Promise((resolve) => {
      if (window.google && window.google.maps) {
        resolve(window.google);
      } else {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAdf1-k7rzWeIe6OByeEYgN3ylhyXFlS9c`;
        script.onload = () => resolve(window.google);
        document.head.appendChild(script);
      }
    });
  };
  