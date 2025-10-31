import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('IngredientsCategories (e2e)', () => {
  let app: INestApplication<App>;
  let createdId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /ingredientsCategories/add 创建分类', async () => {
    const res = await request(app.getHttpServer())
      .post('/ingredientsCategories/add')
      .send({ typeName: 'e2e-category' })
      .expect(201);

    expect(res.body).toHaveProperty('code', 200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data).toHaveProperty('typeName', 'e2e-category');
    createdId = res.body.data.id;
  });

  it('PUT /ingredientsCategories/update 更新分类', async () => {
    const res = await request(app.getHttpServer())
      .put('/ingredientsCategories/update')
      .send({ id: createdId, typeName: 'e2e-category-updated' })
      .expect(200);

    expect(res.body).toHaveProperty('code', 200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('id', createdId);
    expect(res.body.data).toHaveProperty('typeName', 'e2e-category-updated');
  });

  it('GET /ingredientsCategories/getList 获取分类列表', async () => {
    const res = await request(app.getHttpServer())
      .get('/ingredientsCategories/getList')
      .expect(200);

    expect(res.body).toHaveProperty('code', 200);
    expect(Array.isArray(res.body.data)).toBe(true);
    // 列表中应至少包含我们刚刚创建/更新的记录
    const exists = (res.body.data as Array<{ id: number; typeName: string }>).some((c) => c.id === createdId);
    expect(exists).toBe(true);
  });

  it('DELETE /ingredientsCategories/delete 删除分类', async () => {
    const res = await request(app.getHttpServer())
      .delete('/ingredientsCategories/delete')
      .send({ id: createdId })
      .expect(200);

    expect(res.body).toHaveProperty('code', 200);
    expect(res.body).toHaveProperty('data', null);
  });
});


