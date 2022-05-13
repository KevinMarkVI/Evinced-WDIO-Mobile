class NowPlayingPage {
  async getStationName() {
    const selector = `type == 'XCUIElementTypeNavigationBar'`;

    return await $(`-ios predicate string:${selector}`).getAttribute('name');
  }

  async isInView() {
    const selector = `type == 'XCUIElementTypeButton' && name == 'btn play'`;

    const playButton = await $(`-ios predicate string:${selector}`);

    return await playButton.isDisplayed();
  }
}

export default new NowPlayingPage();