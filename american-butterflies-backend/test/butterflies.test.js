import request from "supertest";
import {app} from "../app.js";

describe("Butterflies test CRUD", () => {
  let butterflyId; //variables gloaal,uso: recoger id de mariposa creada
  let response;  // variable global almacena respuesta de peticion

  //
  const butterflyMock = { //campos necesarios para la peticion 
    name: "Mariposa Monarca",
    order_name: "Lepidoptera",
    family: "Nymphalidae",
    color: "Naranja y negro",
    size: "10 cm",
    origin: "América del Norte",
    location: "México",
    habitat: "Praderas",
    plants: "Algodoncillo",
    cycle: "Completo",
    img: "https://ejemplo.com/monarca.jpg",
    fenology: "Migración anual"
  };

  // POST /butterflies
  describe("POST /butterflies", () => { //describe("POST /butterflies" agrupa los test que se relacionan con crear mariposas
    beforeEach(async () => {
      response = await request(app)
        .post("/butterflies")
        .send(butterflyMock)
        .set("Accept", "application/json"); // asegura que express reciba el json correctamente

      butterflyId = response.body.data?.id;
      console.log("Created butterfly ID:", butterflyId);
    });

    test("should return status 201", () => {
      expect(response.status).toBe(201);
    });

    test("should return created butterfly with id", () => {
      expect(response.body.data).toHaveProperty("id");
      expect(response.body.data.name).toBe("Mariposa Monarca");
    });
  });

  // GET /butterflies
  describe("GET /butterflies", () => {
    let getAllResponse;

    beforeEach(async () => {
      getAllResponse = await request(app)
        .get("/butterflies")
        .set("Accept", "application/json");
    });

    test("should return status 200", () => {
      expect(getAllResponse.status).toBe(200);
    });

    test("should return an array of butterflies", () => {
      expect(Array.isArray(getAllResponse.body)).toBe(true);
      expect(getAllResponse.body.length).toBeGreaterThan(0);
    });
  });

  // GET /butterflies/:id
  describe("GET /butterflies/:id", () => {
    let getByIdResponse;

    beforeEach(async () => {
      getByIdResponse = await request(app)
        .get(`/butterflies/${butterflyId}`) // por eso fallaba
        .set("Accept", "application/json");
    });

    test("should return status 200", () => {
      expect(getByIdResponse.status).toBe(200);
    });

    test("should return the butterfly with the given id", () => {
      expect(getByIdResponse.body).toHaveProperty("id", butterflyId);
      expect(getByIdResponse.body.name).toBe("Mariposa Monarca");
    });
  });
});
