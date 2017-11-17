// Copyright 2016, University of Colorado Boulder

/**
 * PhET-iO wrapper type for JS's built-in string type.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Andrew Adare (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var phetioInherit = require( 'PHET_IO/phetioInherit' );
  var phetioNamespace = require( 'PHET_IO/phetioNamespace' );
  var ObjectIO = require( 'PHET_IO/types/ObjectIO' );

  /**
   * @constructor
   */
  function StringIO() {
    assert && assert( false, 'should never be called' );
  }

  phetioInherit( ObjectIO, 'StringIO', StringIO, {}, {
    documentation: 'Wrapper for the built-in JS string type',

    /**
     * Decode a string from a state, which is already a string.
     * @param {Object} stateObject
     * @returns {Object}
     */
    fromStateObject: function( stateObject ) {
      assert && assert( typeof stateObject === 'string', 'value should be string' );
      return stateObject;
    },

    /**
     * Encodes a string to a state (which also happens to be a string).
     * @param {Object} value
     * @returns {Object}
     */
    toStateObject: function( value ) {
      assert && assert( typeof value === 'string', 'value should be string, but it was ' + (typeof value) );
      return value;
    }
  } );

  phetioNamespace.register( 'StringIO', StringIO );

  return StringIO;
} );