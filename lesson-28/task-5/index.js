'use strict';

export function shmoment(initialDate) {
  let currentDate = new Date(initialDate);

  const methods = {
    add(unit, value) {
      switch (unit) {
        case 'years':
          currentDate.setFullYear(currentDate.getFullYear() + value);
          break;
        case 'months':
          currentDate.setMonth(currentDate.getMonth() + value);
          break;
        case 'days':
          currentDate.setDate(currentDate.getDate() + value);
          break;
        case 'hours':
          currentDate.setHours(currentDate.getHours() + value);
          break;
        case 'minutes':
          currentDate.setMinutes(currentDate.getMinutes() + value);
          break;
        case 'seconds':
          currentDate.setSeconds(currentDate.getSeconds() + value);
          break;
        case 'milliseconds':
          currentDate.setMilliseconds(currentDate.getMilliseconds() + value);
          break;
        default:
          throw new Error(`Unsupported time unit: ${unit}`);
      }
      return this;
    },
    subtract(unit, value) {
      return this.add(unit, -value);
    },
    result() {
      return new Date(currentDate);
    },
  };

  return methods;
}
