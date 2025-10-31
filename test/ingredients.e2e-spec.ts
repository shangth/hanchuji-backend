import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Ingredients (e2e)', () => {
  let app: INestApplication<App>;
  let createdTypeId: number;
  let createdIngredientId: number;

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

  it('准备：创建一个食材分类以供引用', async () => {
    const res = await request(app.getHttpServer())
      .post('/ingredientsCategories/add')
      .send({ typeName: 'e2e-ingredients-type' })
      .expect(201);
    expect(res.body).toHaveProperty('code', 200);
    expect(res.body.data).toHaveProperty('id');
    createdTypeId = res.body.data.id;
  });

  it('POST /ingredients/add 创建食材', async () => {
    const res = await request(app.getHttpServer())
      .post('/ingredients/add')
      .send({ ingredientName: 'e2e-ingredient', typeId: createdTypeId })
      .expect(201);

    expect(res.body).toHaveProperty('code', 200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data).toHaveProperty('ingredientName', 'e2e-ingredient');
    expect(res.body.data).toHaveProperty('typeId', createdTypeId);
    createdIngredientId = res.body.data.id;
  });

  it('PUT /ingredients/update 更新食材', async () => {
    const res = await request(app.getHttpServer())
      .put('/ingredients/update')
      .send({ id: createdIngredientId, ingredientName: 'e2e-ingredient-updated', typeId: createdTypeId })
      .expect(200);

    expect(res.body).toHaveProperty('code', 200);
    expect(res.body.data).toHaveProperty('id', createdIngredientId);
    expect(res.body.data).toHaveProperty('ingredientName', 'e2e-ingredient-updated');
  });

  it('GET /ingredients/getList 获取食材列表（含分类关联）', async () => {
    const res = await request(app.getHttpServer())
      .get('/ingredients/getList')
      .expect(200);

    expect(res.body).toHaveProperty('code', 200);
    expect(Array.isArray(res.body.data)).toBe(true);
    const exists = (res.body.data as Array<{ id: number; ingredientName: string }>).some((i) => i.id === createdIngredientId);
    expect(exists).toBe(true);
  });

  it('DELETE /ingredients/delete 删除食材', async () => {
    const res = await request(app.getHttpServer())
      .delete('/ingredients/delete')
      .send({ id: createdIngredientId })
      .expect(200);

    expect(res.body).toHaveProperty('code', 200);
    expect(res.body).toHaveProperty('data', null);
  });

  it('清理：删除测试创建的食材分类', async () => {
    const res = await request(app.getHttpServer())
      .delete('/ingredientsCategories/delete')
      .send({ id: createdTypeId })
      .expect(200);
    expect(res.body).toHaveProperty('code', 200);
  });
});


