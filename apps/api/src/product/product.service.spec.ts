import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product and store it in db', () => {
    const newProduct = service.create({
      name: 'TestProduct',
      price: 200,
      currency: {
        icon: '€',
        name: 'EUR',
      },
      isOnSale: false,
      description: 'This is a test description of a product',
      length: 300,
      weight: 300,
      images: [''],
    });

    expect(newProduct).toEqual({
      name: 'TestProduct',
      price: 200,
      currency: {
        icon: '€',
        name: 'EUR',
      },
      isOnSale: false,
      description: 'This is a test description of a product',
      length: 300,
      weight: 300,
      images: [],
    });
  });

  it('should find product by ID', () => {
    const id = 1;
    const foundProduct = service.findOne(id);
  });
});
