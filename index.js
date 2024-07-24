function breaktails(obj) {
    if (typeof obj !== 'object' || obj === null) {
        throw new Error('Argument must be an object');
      }
    
      return Object.entries(obj)
        .map(([prefix, classes]) => {
          if (!prefix || prefix === 'glb') {
            return classes;
          }
          return classes
            .split(' ')
            .map(cls => `${prefix}:${cls}`)
            .join(' ');
        })
        .join(' ');
  };

  module.exports = { breaktails }