(function (global) {
  const DEFAULT_BASE_PATH = "assets/npcs/";
  const manifest = [
    { id: "hawen-white-dog", name: "哈文（白狗）", file: "hawen-white-dog-body.png", width: 210, height: 443, delay: "-0.10s" },
    { id: "neo-lynx", name: "尼欧（猞猁）", file: "neo-lynx-body.png", width: 254, height: 371, delay: "-0.36s" },
    { id: "qingqing-poodle", name: "晴晴（贵宾犬）", file: "qingqing-poodle-body.png", width: 233, height: 404, delay: "-0.62s" },
    { id: "raccoon", name: "浣熊", file: "raccoon-body.png", width: 396, height: 501, delay: "-0.24s" },
    { id: "white-wolf", name: "白狼", file: "white-wolf-body.png", width: 213, height: 469, delay: "-0.48s" },
    { id: "wowo-dog", name: "窝窝（戴帽子狗）", file: "wowo-dog-body.png", width: 233, height: 376, delay: "-0.76s" },
    { id: "mico-cat", name: "米可（棕色猫）", file: "mico-cat-body.png", width: 232, height: 411, delay: "-0.18s" },
    { id: "hubiya-fox", name: "胡比亚（狐狸）", file: "hubiya-fox-body.png", width: 267, height: 389, delay: "-0.54s" },
    { id: "faye-giraffe", name: "菲伊（长颈鹿）", file: "faye-giraffe-body.png", width: 221, height: 461, delay: "-0.32s" },
    { id: "kuka-polarbear", name: "酷卡（北极熊）", file: "kuka-polarbear-body.png", width: 287, height: 407, delay: "-0.68s" }
  ];
  const byId = Object.fromEntries(manifest.map(npc => [npc.id, npc]));

  function escapeAttr(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalizeMode(mode) {
    return String(mode || "idle").trim().replace(/_/g, "-");
  }

  function get(id) {
    return byId[id] || manifest[0];
  }

  function srcFor(npc, basePath) {
    if (/^(https?:|data:|\/)/.test(npc.file)) return npc.file;
    return `${basePath || DEFAULT_BASE_PATH}${npc.file}`;
  }

  function setVar(el, name, value) {
    if (value === undefined || value === null || value === "") return;
    el.style.setProperty(name, typeof value === "number" ? `${value}px` : String(value));
  }

  function create(idOrOptions, maybeOptions) {
    const options = typeof idOrOptions === "object"
      ? { ...idOrOptions }
      : { ...(maybeOptions || {}), id: idOrOptions };
    const npc = get(options.id || options.npc);
    const mode = normalizeMode(options.mode);
    const el = document.createElement(options.tag || "span");
    const classes = ["npc-actor", `npc-actor--${mode}`];
    if (options.walking || mode.startsWith("walk")) classes.push("npc-actor--walking");
    if (options.className) classes.push(options.className);
    el.className = classes.join(" ");
    el.dataset.npc = npc.id;
    el.dataset.npcName = npc.name;
    el.setAttribute("role", options.role || "img");
    el.setAttribute("aria-label", options.label || npc.name);
    setVar(el, "--npc-width", options.width || options.size);
    setVar(el, "--npc-ratio", `${npc.width} / ${npc.height}`);
    setVar(el, "--npc-duration", options.duration);
    setVar(el, "--npc-delay", options.delay ?? npc.delay);
    setVar(el, "--npc-path-x", options.pathX);
    setVar(el, "--npc-path-y", options.pathY);
    setVar(el, "--npc-scale-from", options.scaleFrom);
    setVar(el, "--npc-shadow", options.shadow);

    const src = srcFor(npc, options.basePath);
    const alt = escapeAttr(options.alt || npc.name);
    el.innerHTML = [
      '<span class="npc-actor__shadow" aria-hidden="true"></span>',
      '<span class="npc-actor__travel">',
      '<span class="npc-actor__bob">',
      '<span class="npc-actor__sprite">',
      `<img class="npc-actor__image" src="${escapeAttr(src)}" alt="${alt}" loading="lazy">`,
      "</span>",
      "</span>",
      "</span>"
    ].join("");
    return el;
  }

  function mount(target, idOrOptions, maybeOptions) {
    const host = typeof target === "string" ? document.querySelector(target) : target;
    if (!host) throw new Error("NpcActors.mount target was not found.");
    const actor = create(idOrOptions, maybeOptions);
    host.appendChild(actor);
    return actor;
  }

  global.NpcActors = {
    manifest,
    get,
    create,
    mount
  };
})(window);
