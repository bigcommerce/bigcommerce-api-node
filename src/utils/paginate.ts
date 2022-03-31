import { AxiosPromise } from '../types';

type QueryParams = Record<string, unknown> | undefined;
type ListFn<ResponseData, Filters extends QueryParams> = (params: Filters) => AxiosPromise<ResponseData[]>;
type ListFnWithID<ResponseData, Filters extends QueryParams> = (
  orderId: number,
  params: Filters,
) => AxiosPromise<ResponseData[]>;

export async function* paginate<ResponseData, Filters extends QueryParams>(
  listFn: ListFn<ResponseData, Filters>,
  params: Filters,
): AsyncGenerator<ResponseData, void, unknown> {
  let page = 1;
  if (params?.page && typeof params.page === 'number') {
    page = params.page;
  }
  while (page >= 1) {
    const response = await listFn({ ...params, page });
    const items = response.data;
    if (items.length === 0) {
      break;
    }
    for (const item of items) {
      yield item;
    }
    page++;
  }
}

export async function* paginateById<ResponseData, Filters extends QueryParams>(
  listFn: ListFnWithID<ResponseData, Filters>,
  id: number,
  params: Filters,
): AsyncGenerator<ResponseData, void, unknown> {
  let page = 1;
  if (params?.page && typeof params.page === 'number') {
    page = params.page;
  }
  while (page >= 1) {
    const response = await listFn(id, { ...params, page });
    const items = response.data;
    if (items.length === 0) {
      break;
    }
    for (const item of items) {
      yield item;
    }
    page++;
  }
}
