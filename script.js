$(function() {
  $('div.review').each(function() {
    var $this = $(this)

    var reviewPageUrl = $this.find('a.review-title').attr('href')
    $.ajax({
      url: reviewPageUrl,
      type: 'GET',
    }).done(function(data) {
      var helpfulVoteText = $(data).find('tr td div div:first').text()
      $this.find('span.review-votes').text(helpfulVoteText)
    })
  })
})