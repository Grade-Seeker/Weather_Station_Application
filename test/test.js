import { expect } from 'chai';

// 引入应用程序的核心逻辑模块（假设核心逻辑在 app.js 中）
import app from './app.js'; // 替换为你的实际逻辑路径

describe('Weather Station Application', () => {
    describe('Random Temperature Generator', () => {
        it('should generate a temperature between 10 and 20', () => {
            const temp = app.generateRandomTemperature();
            expect(temp).to.be.at.least(10);
            expect(temp).to.be.at.most(20);
        });
    });

    describe('Time Stamp Generation', () => {
        it('should return a valid timestamp string', () => {
            const timestamp = app.getCurrentTimestamp();
            expect(timestamp).to.be.a('string');
            // 简单验证时间戳是否包含日期和时间
            expect(timestamp).to.match(/\d{4}\/\d{1,2}\/\d{1,2} \d{1,2}:\d{2}:\d{2}/);
        });
    });

    describe('Data Storage', () => {
        it('should store data correctly in arrays', () => {
            const temperatureData = [];
            const timeStampData = [];

            // 模拟一次数据生成
            const temp = app.generateRandomTemperature();
            const timestamp = app.getCurrentTimestamp();

            app.storeData(temperatureData, timeStampData, temp, timestamp);

            // 检查数据是否正确存储
            expect(temperatureData).to.have.lengthOf(1);
            expect(temperatureData[0]).to.equal(temp);

            expect(timeStampData).to.have.lengthOf(1);
            expect(timeStampData[0]).to.equal(timestamp);
        });
    });
});
