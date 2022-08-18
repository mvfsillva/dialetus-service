const chai = require("chai");
const app = require("../../server");

describe("Integration: Dialect Regions endpoint", () => {
  let server;
  const expectedResponse = [
    { name: "alagoanes", total: 64 },
    { name: "amazones", total: 9 },
    { name: "baianes", total: 44 },
    { name: "capixabes", total: 3 },
    { name: "carioques", total: 16 },
    { name: "catarines", total: 31 },
    { name: "cearences", total: 25 },
    { name: "gauches", total: 31 },
    { name: "lageanes", total: 27 },
    { name: "maranhes", total: 15 },
    { name: "mineires", total: 33 },
    { name: "paraense", total: 34 },
    { name: "paraibanes", total: 3 },
    { name: "paranes", total: 53 },
    { name: "paulistes", total: 32 },
    { name: "pernambuques", total: 31 },
    { name: "piauies", total: 30 },
    { name: "potiguares", total: 41 },
    { name: "rondones", total: 9 },
    { name: "sergipanes", total: 11 },
  ];

  before(() => {
    server = app.listen();
  });

  after(() => server.close());

  it("GET `/regions` should return all available dialects", async () => {
    const res = await chai.request(server).get("/regions").redirects(0);

    expect(res).to.have.status(200);
    expect(res.body).to.eql(expectedResponse);
  });
});
