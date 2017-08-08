$(function() {
  // for book etc.
  convertVoteTexts('div[id^=customer_review]', 'a.review-title', 'span.review-votes', 'tr td div div:first')
  // for kindle etc.
  convertVoteTexts('div[id^=rev-]', 'a.a-link-normal.a-text-normal.a-color-base:first', 'span.a-size-base.a-color-secondary.cr-vote-buttons', 'tr td div div:first')
})

function convertVoteTexts(reviewQuery, linkQuery, defaultVoteTextQuery, helpfulVoteTextQuery) {
  $(reviewQuery).each(function() {
    var $this = $(this)

    var reviewPageUrl = $this.find(linkQuery).attr('href')
    console.log(reviewPageUrl)
    $.ajax({
      url: reviewPageUrl,
      type: 'GET',
    }).done(function(data) {
      var helpfulVoteText = $(data).find(helpfulVoteTextQuery).text()
      console.log(helpfulVoteText)
      $this.find(defaultVoteTextQuery).text(helpfulVoteText)
    })
  })
}