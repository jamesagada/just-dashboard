import should from 'should' // eslint-disable-line no-unused-vars
import sinon from 'sinon'
const ChartComponentInjector = require('inject-loader!./Chart')
var jsdom = require('mocha-jsdom')


describe('ChartComponent', function() {
  jsdom({'useEach': true})

  it('billboard called', function() {
    const fake_generate = sinon.spy()
    const ChartComponent = ChartComponentInjector({'billboard.js': {'bb': {'generate': fake_generate}}}).default
    const bind = ChartComponent({'type': 'spline'})
    const d3 = require('d3')
    const render = bind(d3.selection())
    render({'columns': [
      ['x', 1, 2, 3],
      ['y', 1, 2, 3],
    ]})
    fake_generate.should.be.called()
  })

  it('billboard called with correct arguments', function() {
    const fake_generate = sinon.spy()
    const ChartComponent = ChartComponentInjector({'billboard.js': {'bb': {'generate': fake_generate}}}).default
    const bind = ChartComponent({'type': 'spline'})
    const d3 = require('d3')
    const my_selection = d3.selection()
    my_selection.append = () => ({'node': () => 'magic'})
    const render = bind(my_selection)
    render({'columns': [
      ['x', 1, 2, 3],
      ['y', 1, 2, 3],
    ]})
    fake_generate.should.be.calledWith({
      'bindto': my_selection.append().node(),
      'data': {
        'type': 'spline',
        'columns': [
          ['x', 1, 2, 3],
          ['y', 1, 2, 3],
        ]
      }
    })
  })

  it('billboard called with correct arguments 2', function() {
    const fake_generate = sinon.spy()
    const ChartComponent = ChartComponentInjector({'billboard.js': {'bb': {'generate': fake_generate}}}).default
    const bind = ChartComponent({'type': 'pie'})
    const d3 = require('d3')
    const my_selection = d3.selection()
    my_selection.append = () => ({'node': () => 'magic'})
    const render = bind(my_selection)
    render({'columns': [
      ['a', 1, 2, 3],
      ['b', 1, 2, 3],
    ]})
    fake_generate.should.be.calledWith({
      'bindto': my_selection.append().node(),
      'data': {
        'type': 'pie',
        'columns': [
          ['a', 1, 2, 3],
          ['b', 1, 2, 3],
        ]
      }
    })
  })

})
