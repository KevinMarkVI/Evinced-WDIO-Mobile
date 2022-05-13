Feature: Listening to a station

  Scenario Outline: As a user, I can choose a station to listen to

    Given I am on the stations screen
    When I click on a station number <stationNo>
    Then I should see a screen with the station title saying <stationName>

    Examples:
      | stationNo | stationName           |
      | 1         | Absolute Country Hits |
      | 2         | Newport Folk Radio    |
      | 3         | The Rock FM           |

  Scenario Outline: 2 As a user, I can choose a station to listen to

    Given I am on the stations screen
    When I click on a station number <stationNo>
    Then I should see a screen with the station title saying <stationName>

    Examples:
      | stationNo | stationName           |
      | 1         | Absolute Country Hits |
      | 2         | Newport Folk Radio    |
      | 3         | The Rock FM           |