var countdown = require('..')
  , assert = require('assert')
  , mockdate = require('mockdate')

describe('countdown', function() {

  after(mockdate.reset)

  it('should countdown', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2001-12-15T17:32:12.382Z'), '1 year 11 months 19 days 17 hours 32 minutes')
  })

  it('should show 0 months if year > 1', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2001-01-15T17:32:12.382Z'), '1 year 0 months 15 days 17 hours 32 minutes')
  })

  it('should correctly plural year', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2002-01-15T17:32:12.382Z'), '2 years 0 months 15 days 17 hours 32 minutes')
  })

  it('should not show year if 0', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2000-12-15T17:32:12.382Z'), '11 months 19 days 17 hours 32 minutes')
  })

  it('should show day if 0 if month > 1', function() {
    mockdate.set('2000-01-20')
    assert.equal(countdown('2000-12-15T17:32:12.382Z'), '11 months 0 days 17 hours 32 minutes')
  })

  it('should correctly plural month', function() {
    mockdate.set('2000-01-20')
    assert.equal(countdown('2000-12-15T17:32:12.382Z'), '11 months 0 days 17 hours 32 minutes')
    assert.equal(countdown('2000-03-15T17:32:12.382Z'), '1 month 25 days 17 hours 32 minutes')
  })

})
