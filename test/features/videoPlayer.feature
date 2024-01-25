Feature: Video Player

    As a user
    I want to be able to play videos on my website
    So that I can able to control the video player options

    @local
    Scenario: Verify the video player options
        Given I am on the Daily Mail home page
        And I navigate to the Daily Mail video page
        When I click on the video big play button
        And I click on the video control pause button
        And I click on the video control mute button
        Then I should see the volume icon is muted
        When I click on the video control unmute button
        Then I should see the volume icon is unmuted
        When I click on the video control full screen button
        Then I should see the video is played in full screen
        When I click on the video control play button
        And I click on the video control previous button
        Then I should see the video is played from the beginning
        When I click on the video control skip button
        Then I should see the video is skipped
        And I should see the next video is played after the current video
