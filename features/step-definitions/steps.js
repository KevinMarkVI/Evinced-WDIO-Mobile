import 'dotenv/config';
import { Given, When, Then, AfterAll, BeforeAll } from '@wdio/cucumber-framework';
import { EvincedWdioMobileSdk } from '@evinced/wdio-mobile-sdk';
import nowPlayingPage from '../pageobjects/now-playing-page';

import stationsPage from '../pageobjects/stations-page';

const pages = {
    stations: stationsPage
}

BeforeAll(async () => {

    const evincedWdioSdk = new EvincedWdioMobileSdk();
    const isLicenseValid = evincedWdioSdk.setupCredentials(
        'EVINCED_SERVICE_ID', 
        'EVINCE_API_KEY'
    );
    if (!isLicenseValid) {
        console.log("EVINCED AUTH FAILED");
    }
    
});

//const EvincedWdioMobileSdk = new EvincedWdioMobileSdk();
const evincedWdioSdk = new EvincedWdioMobileSdk();
//EvincedWdioMobileSdk.setDevMode(true);
const isLicenseValid = evincedWdioSdk.setupCredentials(
    'a51a27b1-d23f-96ea-5d12-0135e2700591', 
    'AudUQWQOg8MsxYPoBjyDosqYKTBaaomB'
);
if (!isLicenseValid) {
    console.log("EVINCED AUTH FAILED");
}

Given(/^I am on the (\w+) screen$/, async (page) => {
    await pages[page].open();

    await evincedWdioSdk.analyze();
});



When(/^I click on a station number (\d+)$/, async (stationNumber) => {
    await stationsPage.chooseStation(stationNumber - 1);
});

Then(/^I should see a screen with the station title saying (.*)$/, async (stationName) => {
    const isScreenDisplayed = await nowPlayingPage.isInView();
    expect(isScreenDisplayed).toBe(true);

    const actualStationName = await nowPlayingPage.getStationName();
    expect(actualStationName).toContain(stationName);

    await evincedWdioSdk.analyze();
});

// Then(/^I should scan for a11y issues$/, async () => {
//     await wdioSdk.report();
// });

// If you want to demo analyze() and reportStored() combo
// do the following:
// 
// 1. Remove "And it should be fully accessible!" step from stations.feature file
// 2. Uncomment this
AfterAll(async () => {
    await evincedWdioSdk.reportStored();
});

