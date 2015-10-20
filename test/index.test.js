var countdown = require('..')
  , assert = require('assert')
  , mockdate = require('mockdate')

describe('countdown', function() {

  after(mockdate.reset)

  it('should be empty when count down reached', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2000-01-01T00:00:00.000Z'), '')
  })

  it('should have correct minute resolution', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2000-01-01T00:01:00.000Z'), '1 minute')
  })

  it('should have correct hour resolution', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2000-01-01T01:00:00.000Z'), '1 hour 0 minutes')
  })

  it('should have correct day resolution', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2000-01-02T00:00:00.000Z'), '1 day 0 hours 0 minutes')
  })

  it('should have correct month resolution', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2000-02-01T00:00:00.000Z'), '1 month 0 days 0 hours 0 minutes')
  })

  it('should have correct year resolution', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2001-01-01T00:00:00.000Z'), '1 year 0 months 0 days 0 hours 0 minutes')
  })

  it('should show 0 months if year < 1', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2001-01-15T17:32:12.382Z'), '1 year 0 months 14 days 17 hours 32 minutes')
  })

  it('should correctly plural year', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2002-01-15T17:32:12.382Z'), '2 years 0 months 14 days 17 hours 32 minutes')
  })

  it('should not show year if 0', function() {
    mockdate.set('2000-01-01')
    assert.equal(countdown('2000-12-15T17:32:12.382Z'), '11 months 14 days 17 hours 32 minutes')
  })

  it('should show day if 0 if month < 1', function() {
    mockdate.set('2000-01-20')
    assert.equal(countdown('2000-12-15T17:32:12.382Z'), '10 months 25 days 17 hours 32 minutes')
  })

  it('should correctly plural month', function() {
    mockdate.set('2000-01-20')
    assert.equal(countdown('2000-12-15T17:32:12.382Z'), '10 months 25 days 17 hours 32 minutes')
    assert.equal(countdown('2000-03-15T17:32:12.382Z'), '1 month 24 days 17 hours 32 minutes')
  })

})
