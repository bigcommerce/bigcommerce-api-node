import { required } from './required';

describe('required', () => {
  it('should always throw an error with a string describing what parameter is missing', () => {
    expect(() => required('parameterName')).toThrowError('Missing required parameter: parameterName');
  });
});
