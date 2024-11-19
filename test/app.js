export default {
    generateRandomTemperature: function() {
        return parseFloat((Math.random() * 10 + 10).toFixed(2));
    },
    getCurrentTimestamp: function() {
        return new Date().toLocaleString();
    },
    storeData: function(temperatureArray, timeStampArray, temperature, timestamp) {
        temperatureArray.push(temperature);
        timeStampArray.push(timestamp);
    }
};
