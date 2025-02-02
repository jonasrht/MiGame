export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.loading();
    //Tilemaps
    this.load.tilemapTiledJSON("map", "assets/tilesets/tileset.json");
    this.load.image("tiles", "assets/tilesets/Serene_Village_16x16.png");
    this.load.image("schmiedTiles", "assets/tilesets/schmied16x16.png");
    this.load.image("dorfTiles", "assets/tilesets/dorfset.png");
    this.load.image("shopHaus", "assets/tilesets/shop.png");
    this.load.image("raumset", "assets/tilesets/raumset.png");
    this.load.image("schmiedset", "assets/tilesets/schmiedraum.png");

    // Dungeon
    this.load.tilemapTiledJSON("homeroom", "assets/tilesets/room.json");
    this.load.image(
      "homeground",
      "assets/tilesets/Room_Builder_free_16x16.png"
    );
    this.load.image("interior", "assets/tilesets/Interiors_free_16x16.png");

    this.load.tilemapTiledJSON("dungeonMapv2", "assets/tilesets/dungeon2.json");
    this.load.image(
      "dungeonTiles",
      "assets/tilesets/0x72_DungeonTilesetII_v1.3.png"
    );
    this.load.image("interior", "assets/tilesets/Interiors_free_16x16.png");

    this.load.tilemapTiledJSON("dungeonMap", "assets/tilesets/dungeon.json");
    this.load.image(
      "dungeonTiles",
      "assets/tilesets/0x72_DungeonTilesetII_v1.3.png"
    );

    this.load.image("spike1", "assets/tilesets/spikes/spikes1.png");
    this.load.image("spike2", "assets/tilesets/spikes/spikes2.png");
    this.load.image("spike3", "assets/tilesets/spikes/spikes3.png");
    this.load.image("spike4", "assets/tilesets/spikes/spikes4.png");

    // Player
    this.load.atlas(
      "atlas",
      "assets/tilesets/atlas.png",
      "assets/tilesets/atlas.json"
    );
    this.load.atlas(
      "atlasPink",
      "assets/tilesets/atlas-pink.png",
      "assets/tilesets/atlas.json"
    );

    this.load.atlas(
      "swordult",
      "assets/tilesets/sword-ult.png",
      "assets/tilesets/sword-ult.json"
    );

    this.load.atlas(
      "swordultFemale",
      "assets/tilesets/sword-ult-female.png",
      "assets/tilesets/sword-ult.json"
    );

    this.load.atlas(
      "sword",
      "assets/tilesets/schwerthieb.png",
      "assets/tilesets/schwerthieb.json"
    );

    this.load.atlas(
      "swordFemale",
      "assets/tilesets/schwerthieb-female.png",
      "assets/tilesets/schwerthieb.json"
    )

    this.load.image("buergermeister", "assets/tilesets/burgermeister.png");

    // NPC
    this.load.atlas(
      "npc",
      "assets/tilesets/npc.png",
      "assets/tilesets/npc.json"
    );

    // Dorfbewohner

    this.load.atlas(
      "bewohner1",
      "assets/tilesets/randomdorfguy1.png",
      "assets/tilesets/atlas.json"
    );

    this.load.atlas(
      "bewohner2",
      "assets/tilesets/randomdorfguy2.png",
      "assets/tilesets/atlas.json"
    );

    this.load.atlas(
      "bewohner3",
      "assets/tilesets/randomdorfguy3.png",
      "assets/tilesets/atlas.json"
    );

    // Slime
    this.load.atlas(
      "slime",
      "assets/tilesets/slime.png",
      "assets/tilesets/slime.json"
    );
    this.load.atlas(
      "slimeBlau",
      "assets/tilesets/slime-blau.png",
      "assets/tilesets/slime-blau.json"
    );
    this.load.atlas(
      "slimeRot",
      "assets/tilesets/slime-rot.png",
      "assets/tilesets/slime-rot.json"
    );
    this.load.atlas(
      "slimeGruen",
      "assets/tilesets/slime-gruen.png",
      "assets/tilesets/slime-gruen.json"
    );

    // Arrow Button
    this.load.atlas(
      "arrowBtn",
      "assets/tilesets/spritesheet_arrow.png",
      "assets/tilesets/arrow.json"
    );

    // UI
    this.load.image("uiAttack", "assets/img/gui-ingame.png");
    this.load.image("dialogbox", "assets/img/dialogbox.png");
    this.load.image("flaschenpost", "assets/img/flaschenpost16x16.png");
    this.load.image("brief", "assets/img/flaschenbrief.png");
    this.load.image("questui", "assets/img/questsbalken.png");
    this.load.image("questuiOpen", "assets/img/questbalkenoffen.png");
    this.load.image("newQuest", "assets/img/neuequest.png");
    this.load.image("questDone", "assets/img/questdone.png");
    this.load.image("guiIngameInactive", "assets/img/gui-ingame_inactive.png");
    // Buttons
    this.load.image("exitButton", "assets/img/exitButton4.png");
    this.load.image("MenuTop", "assets/img/menuTop.png");
    this.load.image("MenuMapTop", "assets/img/menuMapTop.png");
    this.load.image("switchOff", "assets/img/switch_off.png");
    this.load.image("switchOn", "assets/img/switch_on.png");

    // Inventar
    this.load.image("invIcon", "assets/img/invenIcon.png");
    this.load.image("heartIcon", "assets/img/Sprite_heart.png");
    this.load.image("coinIcon", "assets/img/coin18.png");
    this.load.image("trankHerz", "assets/img/heiltrank16x16.png");
    this.load.image("trankHerzBig", "assets/img/bigheil16x16.png");
    this.load.image("trankPower", "assets/img/trank16x16.png");
    this.load.image("trankPowerBig", "assets/img/bigtrank16x16.png");
    this.load.image("schwertSchmied", "assets/img/schwert16x16.png");
    this.load.image("schwert2Schmied", "assets/img/schwert216x16.png");
    this.load.image("briefHeilung", "assets/tilesets/brief.png");
    this.load.image("rezeptBrief", "assets/img/rezeptbrief.png");

    

    this.load.image("shopDude", "assets/img/shopperson.png");
    this.load.image("schmiedDude", "assets/img/schmiedperson.png");

    //Audio
    this.load.audio("dorfMusic", "assets/sounds/dorf.mp3");
    this.load.audio("dungeonMusic", "assets/sounds/dungeon.mp3");
    this.load.audio("menuMusic", "assets/sounds/menumusic.mp3");
    this.load.audio("startGame", "assets/sounds/gamestart.mp3");
    this.load.audio("buttonSound", "assets/sounds/button.wav");
    this.load.audio("heartSound", "assets/sounds/heart.wav");
    this.load.audio("damageMaennlich", "assets/sounds/damage_maennlich.mp3");
    this.load.audio("damageWeiblich", "assets/sounds/damage_weiblich.mp3");
    this.load.audio("herzschlag", "assets/sounds/herzschlag.mp3");
    this.load.audio("outdoor", "assets/sounds/outdoor.mp3");
    this.load.audio("tür", "assets/sounds/Tür.mp3");
    this.load.audio("dooropenSound", "assets/sounds/Tür.mp3");
    this.load.audio("schwertschlag", "assets/sounds/schwertschlag.mp3");
    this.load.audio("schwerthieb", "assets/sounds/schwerthieb.mp3");
    this.load.audio("slime1", "assets/sounds/Slime1.mp3");
    this.load.audio("slime2", "assets/sounds/Slime2.mp3");
    this.load.audio("shopsound", "assets/sounds/shop.mp3");

    //Arrow
    this.load.image("arrow", "assets/tilesets/arrow.png");
    //Plugins
  }

  loading() {
    this.text = this.add.text(640, 360, "Game loading...");
  }

  create() {
    this.text.destroy();
    this.scene.start("mainMenu");
  }
}
