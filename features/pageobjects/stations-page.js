class StationsPage {
  async open() {
    const stationCellSelector = `type == 'XCUIElementTypeCell'`;
    const stationCells = await $$(`-ios predicate string:${stationCellSelector}`);

    const areStationCellsPresent = stationCells.length === 5;
    if (!areStationCellsPresent) {
      await driver.back();
    }
  }

  async chooseStation(stationNumber) {
    const stationCellSelector = `type == 'XCUIElementTypeCell'`;

    const stationCells = await $$(`-ios predicate string:${stationCellSelector}`);

    await stationCells[stationNumber].click();
  }
}

export default new StationsPage();