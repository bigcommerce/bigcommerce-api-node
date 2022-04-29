import { paginate, paginateById } from './paginate';

const mockList = jest.fn();

beforeEach(() => {
  mockList.mockReturnValueOnce(
    new Promise(resolve =>
      resolve({
        data: [{ id: 1 }, { id: 2 }],
      }),
    ),
  );

  mockList.mockReturnValueOnce(
    new Promise(resolve =>
      resolve({
        data: [{ id: 3 }, { id: 4 }],
      }),
    ),
  );

  mockList.mockReturnValueOnce(
    new Promise(resolve =>
      resolve({
        data: [],
      }),
    ),
  );
});

afterEach(() => {
  mockList.mockClear();
});

describe('paginate', () => {
  it('should be a function', () => {
    expect(paginate).toBeInstanceOf(Function);
  });

  it('should call listFn, returning one item from the result of listFn at a time', async () => {
    // @ts-expect-error testing paginate generator
    const generator = paginate(mockList);

    expect(await generator.next()).toEqual({ done: false, value: { id: 1 } });
    expect(await generator.next()).toEqual({ done: false, value: { id: 2 } });

    expect(mockList).toHaveBeenCalledWith({ page: 1 });

    expect(await generator.next()).toEqual({ done: false, value: { id: 3 } });
    expect(await generator.next()).toEqual({ done: false, value: { id: 4 } });

    expect(mockList).toHaveBeenCalledWith({ page: 2 });

    expect(await generator.next()).toEqual({ done: true });
  });

  it('should allow the starting page to be overridden if provided as a parameter', async () => {
    const generator = paginate(mockList, { page: 2 });

    expect(await generator.next()).toEqual({ done: false, value: { id: 1 } });

    expect(mockList).toHaveBeenCalledWith({ page: 2 });
  });
});

describe('paginateById', () => {
  it('should be a function', () => {
    expect(paginateById).toBeInstanceOf(Function);
  });

  it('should call listFn with the provided id', async () => {
    // @ts-expect-error testing paginateById order id parameter
    const generator = paginateById(mockList, 100);
    await generator.next();

    expect(mockList).toHaveBeenCalledWith(100, { page: 1 });
  });

  it('should allow the starting page to be overridden if provided as a parameter', async () => {
    const generator = paginateById(mockList, 100, { page: 2 });
    await generator.next();

    expect(mockList).toHaveBeenCalledWith(100, { page: 2 });
  });

  it('should call listFn with an id, returning one item from the result of listFn at a time', async () => {
    // @ts-expect-error testing paginate generator
    const generator = paginateById(mockList, 100);

    expect(await generator.next()).toEqual({ done: false, value: { id: 1 } });
    expect(await generator.next()).toEqual({ done: false, value: { id: 2 } });

    expect(mockList).toHaveBeenCalledWith(100, { page: 1 });

    expect(await generator.next()).toEqual({ done: false, value: { id: 3 } });
    expect(await generator.next()).toEqual({ done: false, value: { id: 4 } });

    expect(mockList).toHaveBeenCalledWith(100, { page: 2 });

    expect(await generator.next()).toEqual({ done: true });
  });
});
