const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'farenhaight',
    value: prompt('Degree Farenhaight:'),
  };

  const farenhaight = measurement.value + 13;
  return farenhaight;
};

console.log(measureKelvin.value);
