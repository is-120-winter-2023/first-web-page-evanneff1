const { dom, fileText } = require("./dom-check.js");

describe("REQUIRED <head> INFO", () => {
  test("<head> has <title>", () => {
    const title = dom.window.document.querySelector("title");
    expect(title).not.toBeNull();
  });

  test("<head> has a <meta> description element", () => {
    expect(
      dom.window.document.querySelector("meta[name=description]")
    ).not.toBeNull();
  });

  test("<head> contains favicon information", () => {
    expect(
      dom.window.document.querySelector("link[rel='icon']")
    ).not.toBeNull();
  });
});

describe("REQUIRED <body> INFO", () => {
  test("<body> contains an <h1>", () => {
    expect(dom.window.document.querySelector("h1")).not.toBeNull();
  });

  test("<body> contains a <p>", () => {
    expect(dom.window.document.querySelector("p")).not.toBeNull();
  });
});

describe("MISC REQUIREMENTS", () => {
  test("single tags end with '>' not '/>' (e.g. <meta ... > not <meta ... />)", () => {
    expect(fileText).not.toMatch(/\/>/);
  });
});
