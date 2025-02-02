import Player from "./objects/Player.js";

export default class homeScene extends Phaser.Scene {
  constructor() {
    super("homeScene");
  }

  init(data) {
    if (data.name == "doorHome") {
      this.spawnX = 92;
      this.spawnY = 604;
    }
    if (data.name == "doorShop") {
      this.spawnX = 87;
      this.spawnY = 113;
    }
    if (data.name == "doorSchmied") {
      this.spawnX = 648;
      this.spawnY = 582;
    }
    if (data.name == "Gameover") {
      this.spawnX = 88;
      this.spawnY = 516;
    }
    this.selectedCharacter = data.char;
  }

  preload() {
    // Steuerung
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    // Fade in Effekt
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    // Tilesets zuweisen
    const homeroom = this.make.tilemap({ key: "homeroom" });
    const tileset = homeroom.addTilesetImage("room", "homeground");
    const raumset = homeroom.addTilesetImage("raum", "raumset");
    const interiorTileset = homeroom.addTilesetImage("tileset", "interior");
    const schmiedTileset = homeroom.addTilesetImage("schmied", "schmiedset");
    const groundLayer = homeroom.createLayer(
      "ground",
      [tileset, interiorTileset, raumset, schmiedTileset],
      0,
      0
    );
    const interior = homeroom.createLayer(
      "interior",
      [tileset, interiorTileset, raumset, schmiedTileset],
      0,
      0
    );
    const interior1 = homeroom.createLayer(
      "interior-1",
      [tileset, interiorTileset, raumset, schmiedTileset],
      0,
      0
    );

    // Spieler an die zuvor an die Scene übergebenden Koordinaten erstellen
    this.player = new Player(
      this,
      this.spawnX,
      this.spawnY,
      this.selectedCharacter
    );

    groundLayer.setCollisionByProperty({ collide: true });
    interior.setCollisionByProperty({ collide: true });
    interior1.setCollisionByProperty({ collide: true });
    this.physics.add.collider(this.player, groundLayer);
    this.physics.add.collider(this.player, interior);
    this.physics.add.collider(this.player, interior1);
    //Kamera soll dem Spieler folgen und Zoom der Kamera auf drei
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(3);

    // Soundeffekt
    this.doorSound = this.sound.add("startGame");
    this.tür = this.sound.add("tür");

    this.door = homeroom.createFromObjects("doors", 1);
    this.doors = this.add.group();
    this.door.forEach((door) => {
      this.physics.world.enable(door);
      door.body.allowGravity = false;
      door.body.immovable = true;
      this.doors.add(door);
    });

    // Personen
    this.shopPersKor = homeroom.findObject(
      "personen",
      (obj) => obj.name === "shopperson"
    );
    this.shopPersKor.visible = false;
    this.shopPers = this.add
      .image(this.shopPersKor.x, this.shopPersKor.y, "shopDude")
      .setScale(0.5);

    this.schmiedPersKor = homeroom.findObject(
      "personen",
      (obj) => obj.name === "schmiedperson"
    );
    this.schmiedPers = this.add
      .image(this.schmiedPersKor.x, this.schmiedPersKor.y, "schmiedDude")
      .setScale(0.5);

    // Home door zurück
    this.doorHomeBack = homeroom.createFromObjects("doors", {
      name: "doorHomeBack",
    });
    this.physics.world.enable(this.doorHomeBack);

    this.physics.add.collider(this.player, this.doorHomeBack, () => {
      this.tür.play();
      this.switchScene("villageScene", this.doorHomeBack[0].name);
    });

    // Shop door züruck
    this.doorShopBack = homeroom.createFromObjects("doors", {
      name: "doorShopBack",
    });
    this.physics.world.enable(this.doorShopBack);

    this.physics.add.collider(this.player, this.doorShopBack, () => {
      this.tür.play();
      this.switchScene("villageScene", this.doorShopBack[0].name);
    });

    // Shop door züruck
    this.doorSchmiedBack = homeroom.createFromObjects("doors", {
      name: "doorSchmiedBack",
    });
    this.physics.world.enable(this.doorSchmiedBack);

    this.physics.add.collider(this.player, this.doorSchmiedBack, () => {
      this.switchScene("villageScene", this.doorSchmiedBack[0].name);
    });

    // Shop
    this.shop = homeroom.createFromObjects("shop", { name: "shopVil" });
    this.physics.world.enable(this.shop);
    this.shop[0].body.immovable = true;
    this.physics.add.collider(this.player, this.shop, () => {
      this.scene.pause().launch("shopScene");
    });

    // Shop
    this.shop = homeroom.createFromObjects("shop", { name: "schmiedVil" });
    this.physics.world.enable(this.shop);
    this.shop[0].body.immovable = true;
    this.physics.add.collider(this.player, this.shop, () => {
        this.scene.pause().launch("schmiedScene");
    });
  }

  // Funktion um in eine andere Scene zu wechseln
  switchScene(scene, name) {
    this.cameras.main.fadeOut(1000);
    this.doorSound.play({ volume: 0.05 });
    this.scene.start(scene, { name, char: this.selectedCharacter });
  }

  update() {
    this.player.update(this.cursors, this.selectedCharacter);

    if (
      Phaser.Input.Keyboard.JustDown(
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX)
      )
    ) {
    }
  }
}
