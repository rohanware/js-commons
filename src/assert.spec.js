describe('assert', function () {
    var _ = require('lodash'), assert = require('./assert');

    describe('isObject method', function () {

        it('should throw an exception when value is not an object', function () {
            testWithAllValuesBut('object', function (value) {
                expect(function () {
                    assert.isObject(value);
                }).toThrowContaining('Object', typeof value);
            })
        });

        it('should not throw an exception when value is an object', function () {
            var testObject = new _.noop();

            assert.isObject({});
            assert.isObject(testObject);
        });

        it('should not throw an exception when value is undefined and optional is true', function () {
            assert.isObject(undefined, true);
        });

        it('should throw an exception with a custom message', function () {
            expect(function () {
                assert.isObject(undefined, false, 'custom error message');
            }).toThrow(new Error('custom error message'));
        });

    });

    describe('isArray method', function () {

        it('should throw an exception when is not an array', function () {
            testWithAllValuesBut('array', function (value) {
                expect(function () {
                    assert.isArray(value);
                }).toThrowContaining('Array', typeof value);
            });
        });

        it('should not throw an exception when value is an array', function () {
            assert.isArray([]);
        });

        it('should not throw an exception when value is undefined and optional is true', function () {
            assert.isArray(undefined, true);
        });

        it('should throw an exception with a custom message', function () {
            expect(function () {
                assert.isArray(undefined, false, 'custom error message');
            }).toThrow(new Error('custom error message'));
        });

    });

    describe('isString method', function () {

        it('should throw an exception when is not a string', function () {
            testWithAllValuesBut('string', function (value) {
                expect(function () {
                    assert.isString(value);
                }).toThrowContaining('String', typeof value);
            });
        });

        it('should not throw an exception when value is a string', function () {
            assert.isString('text');
        });

        it('should not throw an exception when value is undefined and optional is true', function () {
            assert.isString(undefined, true);
        });

        it('should throw an exception with a custom message', function () {
            expect(function () {
                assert.isString(undefined, false, 'custom error message');
            }).toThrow(new Error('custom error message'));
        });

    });

    describe('isBoolean method', function () {

        it('should throw an exception when is not a boolean', function () {
            testWithAllValuesBut('boolean', function (value) {
                expect(function () {
                    assert.isBoolean(value);
                }).toThrowContaining('Boolean', typeof value);
            });
        });

        it('should not throw an exception when value is a boolean', function () {
            assert.isBoolean(true);
        });

        it('should not throw an exception when value is undefined and optional is true', function () {
            assert.isBoolean(undefined, true);
        });

        it('should throw an exception with a custom message', function () {
            expect(function () {
                assert.isBoolean(undefined, false, 'custom error message');
            }).toThrow(new Error('custom error message'));
        });

    });

    describe('isFunction method', function () {

        it('should throw an exception when is not a function', function () {
            testWithAllValuesBut('function', function (value) {
                expect(function () {
                    assert.isFunction(value);
                }).toThrowContaining('Function', typeof value);
            });
        });

        it('should not throw an exception when value is a function', function () {
            assert.isFunction(_.noop);
        });

        it('should not throw an exception when value is undefined and optional is true', function () {
            assert.isFunction(undefined, true);
        });

        it('should throw an exception with a custom message', function () {
            expect(function () {
                assert.isFunction(undefined, false, 'custom error message');
            }).toThrow(new Error('custom error message'));
        });

    });

    describe('isNotObject method', function () {

        it('should throw an exception when value is not an object', function () {
            expect(function () {
                assert.isNotObject({});
            }).toThrow(new Error('The argument should not be of type Object.'));
        });

        it('should not throw an exception when value is not an object', function () {
            testWithAllValuesBut(['object'], function (value) {
                expect(function () {
                    assert.isNotObject(value);
                }).not.toThrow();
            });
        });

        it('should not throw an exception when value is undefined and optional is true', function () {
            assert.isNotObject(undefined, true);
        });

        it('should throw an exception with a custom message', function () {
            expect(function () {
                assert.isNotObject({}, false, 'custom error message');
            }).toThrow(new Error('custom error message'));
        });

    });

    describe('isNumber method', function () {

        it('should throw an exception when value is not a number', function () {
            testWithAllValuesBut('number', function (value) {
                expect(function () {
                    assert.isNumber(value);
                }).toThrowContaining('Number', typeof value);
            });
        });

        it('should not throw an exception when value is a number', function () {
            _.forEach([0, 0.5], function (value) {
                assert.isNumber(value);
            });
        });

        it('should not throw an exception when value is undefined and optional is true', function () {
            assert.isNumber(undefined, true);
        });

        it('should throw an exception with a custom message', function () {
            expect(function () {
                assert.isNumber(undefined, false, 'custom error message');
            }).toThrow(new Error('custom error message'));
        });

    });

    describe('isDefinedOrNotNull method', function () {
        it('should not throw an exception when value is defined', function () {
            testWithAllValuesBut(['undefined', 'null'], function (value) {
                expect(function () {
                    assert.isDefinedOrNotNull(value);
                }).not.toThrow();
            });
        });

        it('should throw an exception when value is undefined or null', function () {
            expect(function () {
                assert.isDefinedOrNotNull(undefined);
            }).toThrow(new Error('The argument should not be undefined or null.'));

            expect(function () {
                assert.isDefinedOrNotNull(null);
            }).toThrow(new Error('The argument should not be undefined or null.'));
        });

        it('should throw an exception with a custom message', function () {
            expect(function () {
                assert.isDefinedOrNotNull(undefined, 'custom error message');
            }).toThrow(new Error('custom error message'));

            expect(function () {
                assert.isDefinedOrNotNull(null, 'custom error message');
            }).toThrow(new Error('custom error message'));
        });
    });

    describe('isUndefinedOrNull', function () {
        it('should not throw an exception when value is undefined or null', function () {
            expect(function () {
                assert.isUndefinedOrNull(undefined);
                assert.isUndefinedOrNull(null);
            }).not.toThrow();
        });

        it('should throw an exception when value is not undefined', function () {
            testWithAllValuesBut(['undefined', 'null'], function (value) {
                expect(function(){
                    assert.isUndefinedOrNull(value);
                }).toThrow(new Error('The argument should be undefined or null.'));
            });
        });

        it('should throw an exception whit a custom message', function () {
            testWithAllValuesBut(['undefined', 'null'], function (value) {
                expect(function(){
                    assert.isUndefinedOrNull(value, 'custom message');
                }).toThrow(new Error('custom message'));
            });
        });
    });

    describe('isNonEmptyString method', function () {

        it('should not throw an exception when value is an non-empty string', function () {
            _.forEach(['f', 'bar', ' . '], function (value) {
                expect(function () {
                    assert.isNonEmptyString(value);
                }).not.toThrow();
            });
        });

        it('should throw an exception when value is not a string or an empty string', function () {
            testWithAllValuesBut('string', function (value) {
                expect(function () {
                    assert.isNonEmptyString(value);
                }).toThrow(new Error('The argument should be a non empty String.'));
            });

            expect(function () {
                assert.isNonEmptyString('');
            }).toThrow(new Error('The argument should be a non empty String.'));
        });

        it('should throw an exception when value is defined and not a string and optional is true', function () {
            testWithAllValuesBut(['string', 'undefined'], function (value) {
                expect(function () {
                    assert.isNonEmptyString(value, true);
                }).toThrow();
            });
        });

        it('should throw an exception when value is an empty string and optional is true', function () {
            expect(function () {
                assert.isNonEmptyString('', true);
            }).toThrow();
        });

        it('should not throw an exception when value is undefined and optional is true', function () {
            expect(function () {
                assert.isNonEmptyString(undefined, true);
            }).not.toThrow();
        });

        it('should throw an exception with a custom message', function () {
            expect(function () {
                assert.isNonEmptyString('', false, 'custom error message');
            }).toThrow(new Error('custom error message'));

            expect(function () {
                assert.isNonEmptyString(undefined, false, 'custom error message');
            }).toThrow(new Error('custom error message'));
        });

    });
});
