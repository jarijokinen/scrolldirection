export const scrolldirection = (options) => {
  const opts = {
    dataElement: document.documentElement,
    dataAttribute: 'data-scroll-direction',
    dataValueUp: 'up',
    dataValueDown: 'down',
    dataUpdateInterval: 250,
    throttleInterval: 250,
    ...options
  };
  
  let tid = 0;
  let yprev = window.pageYOffset;

  const throttle = (callback, timeout) => {
    let wait = false;

    return () => {
      if (wait) return;
      callback.call();
      wait = true;
      setTimeout(() => { wait = false; }, timeout);
    };
  };

  const handler = () => {
    const y = window.pageYOffset;

    if (y > yprev) {
      clearTimeout(tid);
      tid = setTimeout(() => {
        opts.dataElement.setAttribute(opts.dataAttribute, opts.dataValueDown);
      }, opts.dataUpdateInterval);
    }
    else if (y < yprev) {
      clearTimeout(tid);
      tid = setTimeout(() => {
        opts.dataElement.setAttribute(opts.dataAttribute, opts.dataValueUp);
      }, opts.dataUpdateInterval);
    }

    yprev = Math.min(
      Math.max(y, 0),
      document.documentElement.scrollHeight - window.innerHeight
    );
  };

  window.addEventListener('scroll', throttle(handler, opts.throttleInterval));
};
