Feature: Premier League Table

    As a user,
    I want to see the Premier League table
    So that I can see how my team is doing in the league.

    @local
    Scenario Outline: Validating the Premier League table team position and points for <Team Name>
        Given I am on the Daily Mail home page
        When I click on Sport menu in the home page
        And I click on Premier League Tables menu in the sport page
        Then I should see the following team position and points in the sport page
            | TeamName    | TeamPosition | TeamPoints |
            | <Team Name> | <Team Pos>   | <Team Pts> |

        Examples:
            | Team Name   | Team Pos | Team Pts |
            | West Ham    | 6        | 35       |
            | Bournemouth | 12       | 25       |
