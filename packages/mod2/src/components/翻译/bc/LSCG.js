/** @type {Record<string,string>} */
const activities = {
    "Bap": "拍打",
    "SourceCharacter baps TargetCharacter.": "SourceCharacter拍打了TargetCharacter.",
    "Headbutt": "头槌",
    "SourceCharacter headbutts TargetCharacter.": "SourceCharacter用头猛撞TargetCharacter",
    "Nuzzle": "用鼻子轻抚",
    "SourceCharacter nuzzles against the side of TargetCharacter's head.":
        "SourceCharacter用鼻子轻抚TargetCharacter头的一侧.",
    "SourceCharacter nuzzles into TargetCharacter's neck.": "SourceCharacter用鼻子轻抚在TargetCharacter的脖子.",
    "SourceCharacter nuzzles into TargetCharacter's arms.": "SourceCharacter用鼻子轻抚在TargetCharacter的臂膀.",
    "SourceCharacter nuzzles underneath TargetCharacter's hand.": "SourceCharacter用鼻子轻抚在TargetCharacter手底下.",
    "SourceCharacter nuzzles into TargetCharacter's breasts.": "SourceCharacter用鼻子轻抚在TargetCharacter的胸部.",
    "SourceCharacter nuzzles snugly into TargetCharacter.": "SourceCharacter亲昵地用鼻子轻抚着TargetCharacter.",
    "SourceCharacter nuzzles against TargetCharacter's thigh.": "SourceCharacter用鼻子轻抚在TargetCharacter的大腿上.",
    "SourceCharacter nuzzles along TargetCharacter's leg.": "SourceCharacter用鼻子沿着TargetCharacter的腿轻抚着.",
    "SourceCharacter nuzzles under TargetCharacter's feet.": "SourceCharacter用鼻子轻抚在TargetCharacter的脚底下.",
    "Hug": "拥抱",
    "SourceCharacter wraps PronounPossessive arms around TargetCharacter in a big warm hug.":
        "SourceCharacter用温暖的拥抱将PronounPossessive的手臂紧紧地环绕在TargetCharacter身上.",
    "Tackle": "扑倒",
    "SourceCharacter full body tackles TargetCharacter!": "SourceCharacter用全身扑在TargetCharacter身上!",
    "Flop": "瘫倒",
    "SourceCharacter flops on top of TargetCharacter.": "SourceCharacter瘫倒在TargetCharacter的身上.",
    "Kiss Eyes": "亲吻眼睛",
    "SourceCharacter gently kisses over TargetCharacter's eyes.": "SourceCharacter轻轻地亲吻着TargetCharacter的眼睛.",
    "Rub Pussy": "摩擦私处",
    "SourceCharacter grinds PronounPossessive pussy against TargetCharacter's penis.":
        "SourceCharacter用PronounPossessive的私处摩擦着TargetCharacter的阴茎.",
    "Slap Face": "扇脸",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's face.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的脸上.",
    "Slap Mouth": "扇嘴巴",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's mouth.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的嘴巴上.",
    "Slap against Pussy": "扇打私处",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's pussy.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的私处上.",
    "Slap Breast": "扇打乳房",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's breast.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的乳房上.",
    "Slap Thigh": "扇打大腿",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's thigh.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的大腿上.",
    "Slap Calf": "扇打小腿",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's calf.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的小腿上.",
    "Slap Feet": "扇打脚",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's feet.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的脚上.",
    "Slap Butt": "扇打屁股",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's butt.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的屁股上.",
    "Slap Neck": "扇打脖子",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's neck.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的脖子上.",
    "Slap Arms": "扇打手臂",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's arm.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的手臂上.",
    "Slap Hand": "扇打手",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's hand.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的手上.",
    "Slap Penis": "扇打阴茎",
    "SourceCharacter slaps PronounPossessive ActivityAsset against TargetCharacter's penis.":
        "SourceCharacter用PronounPossessive的ActivityAsset扇打在TargetCharacter的阴茎上.",
    "Nibble Tail": "轻咬尾巴",
    "SourceCharacter nibbles on TargetCharacter's tail.": "SourceCharacter轻咬TargetCharacter的尾巴.",
    "SourceCharacter nibbles on PronounPossessive own tail.": "SourceCharacter轻咬自己的尾巴.",
    "Nibble Halo": "咬光环",
    "SourceCharacter nibbles on TargetCharacter's halo.": "SourceCharacter咬TargetCharacter的光环.",
    "Nibble Wing": "轻咬翅膀",
    "SourceCharacter nibbles on TargetCharacter's wing.": "SourceCharacter轻咬TargetCharacter的翅膀.",
    "SourceCharacter nibbles on PronounPossessive own wing.": "SourceCharacter轻咬自己的翅膀.",
    "Grind with Pussy": "用阴部磨擦",
    "SourceCharacter grinds PronounPossessive pussy against TargetCharacter's.":
        "SourceCharacter用阴部磨擦着TargetCharacter的阴部.",
    "Ride with Pussy": "用阴部骑乘",
    "SourceCharacter fucks TargetCharacter's penis with PronounPossessive pussy, grinding up and down.":
        "SourceCharacter用阴部骑乘在TargetCharacter的阴茎,上下磨擦.",
    "Sit on Face": "坐在脸上",
    "SourceCharacter grinds PronounPossessive pussy against TargetCharacter's face.":
        "SourceCharacter用阴部磨擦着TargetCharacter的脸.",
    "Grind with Ass": "用臀部磨擦",
    "SourceCharacter grinds PronounPossessive ass against TargetCharacter's vulva.":
        "SourceCharacter用臀部磨擦着TargetCharacter的阴道.",
    "Ride with Ass": "用臀部骑乘",
    "SourceCharacter fucks TargetCharacter's penis with PronounPossessive ass.":
        "SourceCharacter用臀部骑乘在TargetCharacter的阴茎.",
    "Suck": "吮吸",
    "SourceCharacter wraps PronounPossessive lips around TargetCharacter's ActivityAsset and sucks.":
        "SourceCharacter用嘴唇包裹住TargetCharacter的ActivityAsset并吮吸.",
    "Deepthroat": "深喉",
    "SourceCharacter takes TargetCharacter's ActivityAsset deep down PronounPossessive throat.":
        "SourceCharacter将TargetCharacter的ActivityAsset深深地吞入PronounPossessive的喉咙.",
    "SourceCharacter wraps PronounPossessive lips around PronounPossessive own ActivityAsset and sucks.":
        "SourceCharacter用嘴唇包裹住自己的ActivityAsset并吮吸.",
    "SourceCharacter takes PronounPossessive own ActivityAsset deep down PronounPossessive throat.":
        "SourceCharacter将自己的ActivityAsset深深地吞入PronounPossessive的喉咙.",
    "Eat": "咬一口",
    "SourceCharacter takes a big bite out of TargetCharacter's ActivityAsset.":
        "SourceCharacter咬了TargetCharacter的ActivityAsset一大口.",
    "SourceCharacter takes a big bite out of PronounPossessive own ActivityAsset.":
        "SourceCharacter咬了自己的ActivityAsset一大口.",
    "Grab Tongue": "抓舌头",
    "SourceCharacter reaches in and grabs hold of TargetCharacter's tongue with PronounPossessive fingers.":
        "SourceCharacter伸手抓住TargetCharacter的舌头.",
    "Release Tongue": "松开舌头",
    "SourceCharacter lets go of TargetCharacter's tongue.": "SourceCharacter松开TargetCharacter的舌头.",
    "Hold Hands": "牵手",
    "SourceCharacter takes TargetCharacter's hand.": "SourceCharacter牵住TargetCharacter的手.",
    "Release Hand": "放开手",
    "SourceCharacter lets go of TargetCharacter's hand.": "SourceCharacter放开TargetCharacter的手.",
    "Pinch Butt": "捏屁股",
    "SourceCharacter pinches TargetCharacter's butt.": "SourceCharacter捏住TargetCharacter的屁股.",
    "SourceCharacter pinches PronounPossessive own butt.": "SourceCharacter捏住自己的屁股.",
    "Pinch Cheek": "捏脸颊",
    "SourceCharacter pinches TargetCharacter's cheek.": "SourceCharacter捏住TargetCharacter的脸颊.",
    "SourceCharacter pinches PronounPossessive own cheek.": "SourceCharacter捏住自己的脸颊.",
    "Release Ear": "松开耳朵",
    "SourceCharacter releases TargetCharacter's ear.": "SourceCharacter松开TargetCharacter的耳朵.",
    "Grab Horn": "抓住角",
    "SourceCharacter grabs TargetCharacter's horn.": "SourceCharacter抓住TargetCharacter的角.",
    "Release Arm": "松开手臂",
    "SourceCharacter releases TargetCharacter's arm.": "SourceCharacter放开TargetCharacter的手臂.",
    "Release Horn": "松开角",
    "SourceCharacter releases TargetCharacter's horn.": "SourceCharacter放开TargetCharacter的角.",
    "Release Neck": "松开脖子",
    "SourceCharacter releases TargetCharacter's neck.": "SourceCharacter放开TargetCharacter的脖子.",
    "Release Mouth": "松开嘴巴",
    "SourceCharacter releases TargetCharacter's mouth.": "SourceCharacter松开TargetCharacter的嘴巴.",
    "Stuff with Foot": "用脚填塞",
    "SourceCharacter shoves PronounPossessive foot into TargetCharacter's mouth, grabbing their tongue with PronounPossessive toes.":
        "SourceCharacter用脚塞进TargetCharacter的嘴巴,用脚趾夹住他们的舌头.",
    "Remove Foot": "移开脚",
    "SourceCharacter removes PronounPossessive foot from TargetCharacter's mouth.":
        "SourceCharacter从TargetCharacter的嘴巴里取出自己的脚.",
    "Tug": "拽",
    "SourceCharacter tugs on TargetCharacter's crotch rope.": "SourceCharacter拽着TargetCharacter的胯部绳索.",
    "SourceCharacter tugs lewdly on PronounPossessive own crotch rope.": "SourceCharacter淫荡地拽着自己的胯部绳索.",
    "Flick Ear": "轻弹耳朵",
    "SourceCharacter flicks TargetCharacter's ear.": "SourceCharacter轻弹TargetCharacter的耳朵.",
    "SourceCharacter flicks PronounPossessive own ear.": "SourceCharacter轻弹自己的耳朵.",
    "Flick Nose": "轻弹鼻子",
    "SourceCharacter flicks TargetCharacter's nose.": "SourceCharacter轻弹TargetCharacter的鼻子.",
    "SourceCharacter flicks PronounPossessive own nose.": "SourceCharacter轻弹自己的鼻子.",
    "Flick Nipple": "轻弹乳头",
    "SourceCharacter flicks TargetCharacter's nipple.": "SourceCharacter轻弹TargetCharacter的乳头.",
    "SourceCharacter flicks PronounPossessive own nipple.": "SourceCharacter轻弹自己的乳头.",
    "Flick Butt": "轻弹屁股",
    "SourceCharacter flicks TargetCharacter's butt.": "SourceCharacter轻弹TargetCharacter的屁股.",
    "SourceCharacter flicks PronounPossessive own butt.": "SourceCharacter轻弹自己的屁股.",
    "Flick Foot": "轻弹脚底",
    "SourceCharacter flicks the bottom of TargetCharacter's feet.": "SourceCharacter轻弹TargetCharacter的脚底.",
    "SourceCharacter flicks the bottom of PronounPossessive feet.": "SourceCharacter轻弹自己的脚底.",
    "Flick Forehead": "轻弹额头",
    "SourceCharacter flicks TargetCharacter's forehead.": "SourceCharacter轻弹TargetCharacter的额头.",
    "SourceCharacter flicks PronounPossessive own forehead.": "SourceCharacter轻弹自己的额头.",
    "Flick Neck": "轻弹脖子",
    "SourceCharacter flicks TargetCharacter's neck.": "SourceCharacter轻弹TargetCharacter的脖子.",
    "SourceCharacter flicks PronounPossessive own neck.": "SourceCharacter轻弹自己的脖子.",
    "Flick Thigh": "轻弹大腿",
    "SourceCharacter flicks TargetCharacter's thigh.": "SourceCharacter轻弹TargetCharacter的大腿.",
    "SourceCharacter flicks PronounPossessive own thigh.": "SourceCharacter轻弹自己的大腿.",
    "Flick Leg": "轻弹腿",
    "SourceCharacter flicks TargetCharacter's leg.": "SourceCharacter轻弹TargetCharacter的腿.",
    "SourceCharacter flicks PronounPossessive own leg.": "SourceCharacter轻弹自己的腿.",
    "Flick Clitoris": "轻弹阴蒂",
    "SourceCharacter flicks TargetCharacter's clitoris.": "SourceCharacter轻弹TargetCharacter的阴蒂.",
    "SourceCharacter flicks PronounPossessive own clitoris.": "SourceCharacter轻弹自己的阴蒂.",
    "Flick Balls": "轻弹睾丸",
    "SourceCharacter flicks TargetCharacter's balls.": "SourceCharacter轻弹TargetCharacter的睾丸.",
    "SourceCharacter flicks PronounPossessive own balls.": "SourceCharacter轻弹自己的睾丸.",
    "Flick Pussy": "轻弹阴部",
    "SourceCharacter flicks TargetCharacter's pussy.": "SourceCharacter轻弹TargetCharacter的阴部.",
    "SourceCharacter flicks PronounPossessive own pussy.": "SourceCharacter轻弹自己的阴部.",
    "Flick Penis": "轻弹阴茎",
    "SourceCharacter flicks TargetCharacter's penis.": "SourceCharacter轻弹TargetCharacter的阴茎.",
    "SourceCharacter flicks PronounPossessive own penis.": "SourceCharacter轻弹自己的阴茎.",
    "Chomp on Arm": "咬住手臂",
    "SourceCharacter chomps down on TargetCharacter's arm and doesn't let go.":
        "SourceCharacter狠狠地咬住TargetCharacter的手臂,不松口.",
    "Chomp on Leg": "咬住腿",
    "SourceCharacter chomps down on TargetCharacter's leg and doesn't let go.":
        "SourceCharacter狠狠地咬住TargetCharacter的腿,不松口.",
    "Chomp on Butt": "咬住屁股",
    "SourceCharacter chomps down on TargetCharacter's butt and doesn't let go.":
        "SourceCharacter狠狠地咬住TargetCharacter的屁股,不松口.",
    "Chomp on Neck": "咬住脖子",
    "SourceCharacter chomps down on TargetCharacter's neck and doesn't let go.":
        "SourceCharacter狠狠地咬住TargetCharacter的脖子,不松口.",
    "Release Chomp": "松开咬住",
    "SourceCharacter releases PronounPossessive chomp on TargetCharacter.":
        "SourceCharacter松开对TargetCharacter的咬住.",
    "Quaff": "畅饮",
    "SourceCharacter presses PronounPossessive ActivityAsset up against TargetCharacter's lips.":
        "SourceCharacter将PronounPossessive的ActivityAsset紧贴在TargetCharacter的嘴唇上.",
    "SourceCharacter quaffs the ActivityAsset in one gulp.": "SourceCharacter一口气畅饮了ActivityAsset.",
    "Tighten Collar": "收紧项圈",
    "Loosen Collar": "放松项圈",
    "Collar Stats": "项圈状态",
    "Shoot Netgun": "射击网枪",
    "SourceCharacter takes aim at TargetCharacter with PronounPossessive net gun.":
        "SourceCharacter用PronounPossessive的网枪瞄准TargetCharacter.",
    "SourceCharacter turns PronounPossessive net gun on PronounSelf.":
        "SourceCharacter将PronounPossessive的网枪对准PronounSelf.",
    "Pour into Funnel": "倒入漏斗",
    "SourceCharacter pours PronounPossessive ActivityAsset into TargetCharacter's funnel.":
        "SourceCharacter将PronounPossessive的ActivityAsset倒入TargetCharacter的漏斗中.",
    "SourceCharacter pours PronounPossessive ActivityAsset into PronounPossessive own funnel.":
        "SourceCharacter将PronounPossessive的ActivityAsset倒入PronounPossessive自己的漏斗中.",
    "Gag Mouth": "堵住嘴巴",
    "SourceCharacter gags TargetCharacter with PronounPossessive ActivityAsset.":
        "SourceCharacter用PronounPossessive的ActivityAsset堵住了TargetCharacter的嘴巴.",
    "SourceCharacter gags PronounSelf with PronounPossessive own ActivityAsset.":
        "SourceCharacter用PronounPossessive自己的ActivityAsset堵住了PronounSelf的嘴巴.",
    "Place around Neck": "放在脖子上",
    "SourceCharacter places PronounPossessive ActivityAsset around TargetCharacter's neck.":
        "SourceCharacter将PronounPossessive的ActivityAsset放在TargetCharacter的脖子上.",
    "SourceCharacter places PronounPossessive ActivityAsset around PronounPossessive own neck.":
        "SourceCharacter将PronounPossessive的ActivityAsset放在PronounPossessive自己的脖子上.",
    "Take Gag": "取下口球",
    "SourceCharacter removes TargetCharacter's ActivityAsset.": "SourceCharacter取下了TargetCharacter的ActivityAsset.",
    "SourceCharacter pulls the ActivityAsset from PronounPossessive mouth.":
        "SourceCharacter从PronounPossessive的嘴里取下了ActivityAsset.",
    "SourceCharacter takes TargetCharacter's ActivityAsset from around TargetPronounPossessive neck.":
        "SourceCharacter从TargetPronounPossessive的脖子上取下了TargetCharacter的ActivityAsset.",
    "SourceCharacter takes PronounPossessive own ActivityAsset from around PronounPossessive neck.":
        "SourceCharacter从PronounPossessive的脖子上取下了PronounPossessive自己的ActivityAsset.",
    "Move to Mouth": "移至嘴边",
    "SourceCharacter moves TargetCharacter's ActivityAsset up to PronounPossessive mouth.":
        "SourceCharacter将TargetCharacter的ActivityAsset移到了PronounPossessive的嘴边.",
    "SourceCharacter moves PronounPossessive own ActivityAsset up to PronounPossessive mouth.":
        "SourceCharacter将PronounPossessive自己的ActivityAsset移到了PronounPossessive的嘴边.",
    "Wear around Neck": "挂在脖子上",
    "SourceCharacter removes TargetCharacter's ActivityAsset, letting it hang around their neck.":
        "SourceCharacter取下了TargetCharacter的ActivityAsset,让它挂在了他们的脖子上.",
    "SourceCharacter removes the ActivityAsset from Pro…h and lets it hang around PronounPossessive neck.":
        "SourceCharacter取下了PronounPossessive的ActivityAsset,并让它挂在了PronounPossessive的脖子上.",
    "Tie Up": "捆绑",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's feet, binding TargetPronounPossessive tightly.":
        "SourceCharacter迅速地用绳子将PronounPossessive的脚缠绕起来,紧紧地捆绑着TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive feet tightly.":
        "SourceCharacter紧紧地用绳子将PronounPossessive的脚缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's legs, binding TargetPronounPossessive tightly.":
        "SourceCharacter迅速地用绳子将PronounPossessive的腿缠绕起来,紧紧地捆绑着TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive legs tightly.":
        "SourceCharacter紧紧地用绳子将PronounPossessive的腿缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's pelvis, binding TargetPronounPossessive tightly.":
        "SourceCharacter迅速地用绳子将PronounPossessive的骨盆缠绕起来,紧紧地捆绑着TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive pelvis tightly.":
        "SourceCharacter紧紧地用绳子将PronounPossessive的骨盆缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's arms, binding TargetPronounPossessive tightly.":
        "SourceCharacter迅速地用绳子将PronounPossessive的胳膊缠绕起来,紧紧地捆绑着TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive arms tightly.":
        "SourceCharacter紧紧地用绳子将PronounPossessive的胳膊缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's eyes, binding TargetPronounPossessive tightly.":
        "SourceCharacter迅速地用绳子将PronounPossessive的眼睛缠绕起来,紧紧地捆绑着TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive eyes tightly.":
        "SourceCharacter紧紧地用绳子将PronounPossessive的眼睛缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's neck, binding TargetPronounPossessive tightly.":
        "SourceCharacter迅速地用绳子将PronounPossessive的脖子缠绕起来,紧紧地捆绑着TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive neck tightly.":
        "SourceCharacter紧紧地用绳子将PronounPossessive的脖子缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's breasts, binding TargetPronounPossessive tightly.":
        "SourceCharacter迅速地用绳子将PronounPossessive的胸部缠绕起来,紧紧地捆绑着TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive breasts tightly.":
        "SourceCharacter紧紧地用绳子将PronounPossessive的胸部缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's waist, binding TargetPronounPossessive tightly.":
        "SourceCharacter迅速地用绳子将PronounPossessive的腰部缠绕起来,紧紧地捆绑着TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive waist tightly.":
        "SourceCharacter紧紧地用绳子将PronounPossessive的腰部缠绕起来.",
    "SourceCharacter swiftly wraps PronounPossessive rope around TargetCharacter's toes, binding TargetPronounPossessive tightly.":
        "SourceCharacter迅速地用绳子将PronounPossessive的脚趾缠绕起来,紧紧地捆绑着TargetPronounPossessive.",
    "SourceCharacter wraps PronounPossessive rope around PronounPossessive toes tightly.":
        "SourceCharacter紧紧地用绳子将PronounPossessive的脚趾缠绕起来.",
    "Steal": "抢夺",
    "SourceCharacter grabs at TargetCharacters hands, trying to steal TargetPronounPossessive item.":
        "SourceCharacter抓住了TargetCharacters的手,试图抢夺TargetPronounPossessive的物品.",
    "Give Item": "交出物品",
    "SourceCharacter grabs at TargetCharacters hands, trying to steal TargetPronounPossessive item!":
        "SourceCharacter抓住了TargetCharacters的手, 试图抢夺TargetPronounPossessive的物品!",
    "Shark Bite": "鲨鱼咬",
    "SourceCharacter's ActivityAsset bites TargetCharacter's arm.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的胳膊.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's foot.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的脚.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's breast.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的乳房.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's butt.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的臀部.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's ear.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的耳朵.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's leg.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的腿.",
    "SourceCharacter's ActivityAsset bites TargetCharacter on the hand.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的手.",
    "SourceCharacter's ActivityAsset bites TargetCharacter in the thigh.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的大腿.",
    "SourceCharacter's ActivityAsset bites TargetCharacter on the neck.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的脖子.",
    "SourceCharacter's ActivityAsset bites TargetCharacter's nipple.":
        "SourceCharacter的ActivityAsset咬住了TargetCharacter的乳头.",
    "SourceCharacter's ActivityAsset chomps on TargetCharacter.":
        "SourceCharacter的ActivityAsset狠狠地咬住了TargetCharacter.",
    "Boop": "轻戳",
    "SourceCharacter boops TargetCharacter's nose with PronounPossessive ActivityAsset.":
        "SourceCharacter用PronounPossessive的ActivityAsset轻戳了TargetCharacter的鼻子.",
    "Squeeze": "紧紧地拥抱",
    "SourceCharacter hugs PronounPossessive ActivityAsset tightly.":
        "SourceCharacter紧紧地拥抱着PronounPossessive的ActivityAsset.",
    "Take Photo": "拍照",
    "SourceCharacter snaps a photo of TargetCharacter.": "SourceCharacter给TargetCharacter拍了一张照片.",
    "SourceCharacter takes a selfie.": "SourceCharacter自拍了一张照片.",
    "Wag Tail": "摇晃尾巴",
    "SourceCharacter wags PronounPossessive tail.": "SourceCharacter摇晃PronounPossessive的尾巴.",
    "SourceCharacter wraps TargetCharacter in a therapeutic self-hug.":
        "SourceCharacter以一个治疗性的自我拥抱包裹着TargetCharacter.",
    "SourceCharacter releases PronounPossessive own neck.": "SourceCharacter松开了自己的脖子.",
    "Clamp Hand over Eyes": "用手捂住眼睛.",
    "SourceCharacter clamps her hand over TargetCharacter's eyes.":
        "SourceCharacter将她的手捂在TargetCharacter的眼睛上.",
    "SourceCharacter clamps her hand over PronounPossessive own eyes.": "SourceCharacter将她的手捂在她自己的眼睛上.",
    "SourceCharacter releases PronounPossessive own mouth.": "SourceCharacter放开了自己的嘴.",
    "Release Eyes": "放开眼睛",
    "SourceCharacter removes their hand from TargetCharacter's eyes.":
        "SourceCharacter 将手从TargetCharacter的眼睛上移开.",
    "SourceCharacter pulls their hand away from PronounPossessive eyes.": "SourceCharacter 将手从自己的眼睛旁抽走.",
    "SourceCharacter shoves PronounPossessive foot into…rabbing their tongue with PronounPossessive toes.":
        "SourceCharacter 将脚塞入……用脚趾抓挠自己的舌头.",
};

/** @type { Record<string,string> } */
const translation = {
    // LSCG
    "- LSCG General -": "- LSCG 通用 -",
    "- LSCG Triggered Hypnosis -": "- LSCG 触发催眠 -",
    "- LSCG Breathplay -": "- LSCG 窒息 -",
    "Now available:": "现在可用:",
    "Andrew's Collar Control Module!!": "Andrew 的颈圈控制模块!!",
    "Has your owner sent you shopping for a more controlling collar?": "你的主人是否让你去购物找一个更有控制力的颈圈?",
    "Are you looking for some extra motivation for good behavior?": "你是否在寻找一些额外的动力来保持良好行为?",
    "Act now and secure your Control Module now for the low low price of $500!":
        "立即行动,以低低的价格$500购买并保护您的控制模块!",
    "Attach this revolutionary new device to your existing collar and it will":
        "将这个革命性的新设备连接到您现有的颈圈上,",
    "enhance it with the ability to tighten and loosen on command!": "它将增强其根据命令收紧和松开的能力!",
    "Let your dom quiet down those bratty moments and reward good behavior!":
        "让你的主人平息那些调皮的时刻并奖励良好的行为!",
    "Update Collar:": "更新颈圈:",
    "Current Name: undefined": "当前名称: 未定义",
    "- LSCG Drug Enhancements -": "- LSCG 药物增强 -",
    "- LSCG Activities -": "- LSCG 活动 -",
    "Please Select a Zone": "请选择一个区域",
    "- LSCG Magic™ -": "- LSCG 魔法™ -",
    "Magic™!": "魔法™!",
    "Want to wow and amaze your friends and lovers?": "想要让你的朋友和爱人赞叹不已吗?",
    "Are you looking to impress and punish your enemies?": "你是不是想要给你的敌人留下深刻印象并惩罚他们?",
    "With just a simple signature you too can experience the thrill of Magic™!":
        "只需简单的签名,你也可以体验到Magic™的刺激!",
    "- Reveal the ancient secrets of the arcane! -": "- 揭示神秘古老的奥秘! -",
    "- Craft your own amazing potions! -": "- 制作你自己的惊人药剂! -",
    "- Share in your powers, or dont! -": "- 分享你的力量n或不要! -",
    "General": "一般",
    "Triggered Hypnosis": "触发催眠",
    "Breathplay": "窒息",
    "Drug Enhancements": "药物增强",
    "Activities": "活动",
    "Magic™": "魔法™",
    "Open Help": "打开帮助",
    "Export LSCG Settings": "导出 LSCG 设置",
    "Open LSCG Wiki on GitHub.": "在 GitHub 上打开 LSCG Wiki",
    "Open LSCG Latest Release on Github.": "在 Github 上打开 LSCG 最新版本",
    "Import LSCG Settings": "导入 LSCG 设置",
    "Emergency reset of LSCG": "紧急重置 LSCG",
    "LSCG Scripts Enabled:": "LSCG 脚本已启用:",
    "Block Settings While Restrained:": "在受限制时阻止设置:",
    "Immersive Conditions:": "沉浸式环境:",
    "Blur While Edged:": "寸止时模糊:",
    "Enable Lipstick Marks:": "启用口红痕迹:",
    "Dry Lipstick:": "干的口红:",
    "Enable Boop Reactions:": "启用 Boop 反应:",
    "Show Check Rolls:": "显示掷骰结果:",
    "Share Public Craftings:": "分享你的制作物品:",
    "Hide Resizing Effects:": "隐藏调整大小效果:",
    "Hide all Opacity Overrides:": "隐藏所有不透明度覆盖:",
    "Prevent Remote Opacity Changes:": "防止远程不透明度更改:",
    "Enable LSCG Features.": "启用 LSCG 功能.",
    "Prevents LSCG settings access while restrained.": "在受束缚时阻止 LSCG 设置访问.",
    "Applies a more restrictive set of conditional states while incapacitated by LSCG.":
        "在被 LSCG 禁锢时应用更为严格的条件状态.",
    "Apply extra blurring to the screen while edging.": "在寸止时为界面添加额外模糊.",
    "Apply kiss marks when lipstick-wearing people kiss you on the cheek/forehead/neck.":
        "当涂口红的人吻你的脸颊/额头/颈部时添加吻痕.",
    "Never apply kissmarks when you are the kisser.": "当你是亲吻者时不留下吻痕.",
    "Auto-react when booped.": "当被戳时自动反应.",
    "If enabled, will display the attacker/defender roll values for activity checks.":
        "如果开启,将显示活动检查的攻击者/防御者掷骰值.",
    "If enabled, other LSCG users in the room will be able to use your crafted items on other people.":
        "如果开启,房间中的其他 LSCG 用户将能够在其他人身上使用你制作的物品.",
    "If checked, you will not see any LSCG resizing effects. (eg. from magic)":
        "如果开启,你将看不到任何 LSCG 的调整大小效果.(例如,来自魔法的效果)",
    "If checked, will skip any opacity override effects. (includes x-ray vision)":
        "如果开启,将跳过任何不透明度覆盖效果.(包括透视视觉)",
    "If checked, other players will not be able to directly modify the opacity settings on your wardrobe items.":
        "如果开启,其他玩家将无法直接修改你的衣柜物品的不透明度设置.",
    "LSCG main menu": "LSCG 主菜单",
    "Enabled:": "启用催眠:",
    "Override Trigger Words:": "覆盖触发词:",
    "Override Awaken Words:": "覆盖唤醒词:",
    "Custom list of words and/or phrases as awakener triggers. Separated by a comma.":
        "自定义单词和/或短语作为唤醒触发器的列表.用逗号分隔.",
    "Override Allowed Member IDs:": "覆盖允许的成员 ID:",
    "Hypnosis Length (min.):": "催眠时长(分钟):",
    "Cooldown (sec.):": "冷却时间(秒):",
    "Enable Cycle:": "启用循环:",
    "Trigger Cycle Time (min.):": "触发循环时间(分钟):",
    "Custom list of words and/or phrases as hypnisis triggers. Separated by a comma.":
        "自定义单词和/或短语作为催眠触发器的列表.用逗号分隔.",
    "Enabled the Triggered Hypnosis Features.": "启用触发式催眠功能.",
    "Comma separated list of member IDs. If empty will use standard Item Permissions.":
        "成员 ID 的逗号分隔列表.如果为空,将使用标准的物品权限.",
    "Length of hypnosis time (in minutes) before automatically recovering. Set to 0 for indefinite.":
        "自动恢复前的催眠时间长度(以分钟为单位).设置为 0 表示无限制.",
    "If checked, only one trigger will be active at a time and will cycle after use.":
        "如果选中,一次只能激活一个触发器,并在使用后循环.",
    "Number of minutes after activation to wait before cycling to a new trigger.":
        "激活后等待多少分钟,然后循环到一个新的触发器.",
    "Cooldown time (in seconds) before you can be hypnotized again.": "再次被催眠之前的冷却时间(以秒为单位).",
    "Allow Remote Access:": "允许远程访问:",
    "Remote Access Requires Trance:": "远程访问需要催眠:",
    "Remote Access Limited to Hypnotizer:": "远程访问限制为催眠者:",
    "Allow Remote Override Member Modification:": "允许远程覆盖成员修改:",
    "Lockable:": "可锁定:",
    "Build arousal while hypnotized:": "催眠时兴奋:",
    "Hypnotized Eye Color:": "催眠眼睛颜色:",
    "Hypnotized Eye Type:": "催眠眼睛类型:",
    "If checked, allowed users can modify these settings.": "如果选中,允许的用户可以修改这些设置.",
    "If checked, remote access is only possible while actively hypnotized.": "如果选中,远程访问仅在被积极催眠时才可能.",
    "If checked, only the user who hypnotized you can access your settings (after matching other conditions).":
        "如果选中,只有催眠你的用户在匹配其他条件后才能访问你的设置.",
    "If checked, any remote users can change your Override Member Id list (otherwise, only owner can).":
        "如果选中,任何远程用户都可以更改你的覆盖成员ID列表(否则,只有主人可以).",
    "If checked, allowed users can lock you out of these settings.": "如果选中,允许的用户可以锁定你无法访问这些设置.",
    "If checked being hypnotized will increase arousal.": "如果选中,被催眠时将增加兴奋.",
    "Hex code of your eye color while hypnotized (default: #A2A2A2).":
        "催眠时你的眼睛颜色的十六进制代码(默认:#A2A2A2).",
    "Eye type # to use while under hypnosis (default: 9).": "在催眠状态下使用的眼睛类型 #(默认:9).",
    "Allow Speech Trigger Words:": "允许语音触发词汇:",
    "Silence Trigger Words:": "禁止语音触发词汇:",
    "When spoken while hypnotized, will allow speech. Separated by a comma.":
        "在催眠状态下说出时,将允许语音.用逗号分隔.",
    "When spoken while hypnotized, will prevent speech. Separated by a comma.":
        "在催眠状态下说出时,将阻止语音.用逗号分隔.",
    "Enable Hand Choking:": "启用手部窒息:",
    "Enable Gag Suffocation:": "启用口球窒息:",
    "Sleep on Passout:": "昏倒时进入睡眠:",
    "Sleep time (minutes):": "睡眠时间(分钟):",
    "How long you will sleep after passout if enabled.": "启用后昏倒后的睡眠时长.",
    'Enables breathplay using "Choke Neck" activity. If done repeatedly will cause blackout.':
        '启用"颈部窒息"活动进行窒息.如果反复进行,会导致晕厥.',
    "Enabled breathplay using nose plugs and sufficient gags.": "使用鼻塞和足够的口球进行窒息.",
    "Will force sleep on passout.": "在昏倒时强制进入睡眠.",
    "Allow Self-Tightening:": "允许自我拉紧:",
    "Allow Self-Loosening:": "允许自我放松:",
    "Allowed Members IDs:": "允许的成员ID:",
    "Limit to Crafted User:": "限制为制作的用户:",
    "Tighten Trigger:": "拉紧触发:",
    "Loosen Trigger:": "放松触发:",
    "Immersive:": "沉浸式:",
    "Enable Buttons:": "启用按钮:",
    "Any Collar:": "任何项圈:",
    "Update": "更新",
    "Enabled the Choking Collar Features.": "启用窒息项圈功能.",
    "Enables Remote Access to Collar Settings.": "启用远程访问项圈设置.",
    "Allowes Remote Access Users to lock you out of these settings.": "允许远程访问用户锁定您无法访问这些设置.",
    "Comma separated list of member IDs who can activate the collar. Leave empty for item permissions.":
        "以逗号分隔的成员ID列表,可以激活项圈.留空表示使用项权限.",
    "Limits collar activation to crafted user and allowed list. If no crafted user will use item permissions.":
        "将项圈激活限制为精心制作的用户和允许的列表.如果没有精心制作的用户,将使用项权限.",
    "Word or phrase that, if spoken, will tighten the collar.": "如果说出的话或短语将拉紧项圈.",
    "Word or phrase that, if spoken, will loosen the collar.": "如果说出的话或短语将放松项圈.",
    "Allow the wearer to loosen their own collar.": "允许佩戴者自己放松项圈.",
    "Allow the wearer to tighten their own collar.": "允许佩戴者自己拉紧项圈.",
    "Allows activation of the collar features via buttons (activities & commands).":
        "通过按钮(活动和命令)启用项圈功能.",
    "If enabled, any collar can trigger and activate.": "如果启用,任何项圈都可以触发和激活.",
    "Prevents the wearer from viewing triggers via show-triggers.": "防止佩戴者通过show-triggers查看触发词.",
    "Enable Sedative:": "启用镇静剂:",
    "Enable Brainwash Drug:": "启用洗脑药物:",
    "Enable Aphrodisiac:": "启用催情剂:",
    "Filled Glass Sip Limit:": "玻璃杯饮用次数:",
    "Allow Continuous Delivery:": "呼吸器持续气体:",
    "Inexhaustible Gases:": "不会的耗尽气体:",
    "Show Drug Levels:": "显示药物水平:",
    "Heartbeat Sound:": "心跳声:",
    "Chaotic Net Gun:": "混乱网枪:",
    "Enable Enhanced Drinks, Injectors and Net Gun.": "增强饮料, 注射器和网枪.",
    "If true, will allow respirators to deliver a continuous supply of drugged gas.": "允许呼吸器提供持续的麻醉气体.",
    'Activates for any injector or drink with "horny" or "aphrodisiac" in its crafted name or description.':
        '对于任何注射器或饮料,如果其精心制作的名称或描述中包含"horny"或"aphrodisiac",则激活.',
    'Activates for any injector or drink with "sedative" or "tranquilizer" in its crafted name or description.':
        '对于任何注射器或饮料,如果其精心制作的名称或描述中包含"sedative"或"tranquilizer",则激活.',
    "Enable Enhanced Injections and Net Gun.": "启用增强注射和网枪.",
    'Activates for any injector or drink with "mind control," "hypnotizing," or "brainwashing" in its crafted name ordescription.':
        '对于任何注射器或饮料,如果其精心制作的名称或描述中包含"mind control","hypnotizing"或"brainwashing",则激活.',
    "Number of sips before your filled glasses empty. (0 for no limit)": "玻璃杯空前的饮用次数.(0 表示无限制)",
    "If true, any continuous delivery (eg. respirator) on you will never run out of gas.":
        "你身上的任何持续输送设备(例如呼吸机)都不会耗尽气体.",
    "If true, will display bars showing the level of each drug type.": "将显示条形图, 显示每种药物类型的条形图.",
    "If true, enables an occasional heartbeat sound while under the influence of aphrodisiac.":
        "在受到催情剂影响时,偶尔会启用心跳声.",
    "If true, your net gun will fire wildly and have a 50/50 chance to net a random character instead of your target.":
        "你的网枪将会随意开火, 并且有50/50的机会网住一个随机的角色, 而不是你指定的目标.",
    "Enable Chloroform:": "启用氯仿(药棉):",
    "Chloroform Never Fades:": "氯仿(药棉)永不消逝:",
    "Fall asleep if chloroformed.": "被氯仿(药棉)催眠入睡.",
    "If enabled one rag over your mouth will last forever until removed, otherwise its potency will fade after an hour.":
        "如果启用,放在嘴上的药棉将永远持续,直到被移除,否则其效力将在一小时后减弱.",
    "Number times within 5 minutes this activity must be done before hypnosis or sleep is triggered.":
        "在5分钟内必须完成此活动的次数,然后才能触发催眠或睡眠.",
    "Using this activity on this location can trigger hypnosis.": "在此位置使用此活动可以触发催眠.",
    "Arousal threshold required for this activity to trigger hypnosis. If both trance and sleep are checked, lower arousal triggers sleep.":
        "触发催眠所需的性唤起阈值.如果同时选中了催眠和睡眠,则较低的性唤起将触发睡眠.",
    "Using this activity on this location will awaken you from trance or deep sleep.":
        "在此位置使用此活动将唤醒您从催眠或深度睡眠中.",
    "Using this activity on this location can cause an orgasm.": "在此位置使用此活动可能导致性高潮.",
    "Arousal threshold required for this activity to cause an orgasm.": "使此活动导致性高潮所需的性唤醒阈值.",
    "Member IDs who can trance/sleep/awaken/orgasm with this activity. Leave empty to use BC item permissions":
        "可以使用此活动进行催眠/睡眠/唤醒/性高潮的成员ID.留空以使用BC项权限.",
    "Using this activity on this location can put them to sleep.": "在此位置使用此活动可以使他们入睡.",
    "Can Induce Trance": "可以诱发催眠状态",
    "Can Induce Sleep": "可以诱发睡眠状态",
    "Repeats Required": "所需重复次数",
    "Trance Arousal Threshold": "催眠唤醒阈值",
    "Can Awaken": "可以唤醒",
    "Can Cause Orgasm": "可以导致性高潮",
    "Orgasm Arousal Threshold": "性高潮唤醒阈值",
    "Allowed Member IDs": "允许的成员ID",
    "Enable Wild Magic:": "启用野性魔法:",
    "Force Wild Magic": "强制野性魔法",
    "True Wild Magic": "真实野性魔法",
    "Prevent X-Ray Vision": "防止X射线视觉",
    "Blocked Effects:": "阻止的效果:",
    "Hypnotizing": "催眠",
    "Hypnotizes the target.": "催眠目标.",
    "Cast a random spell from your spell list, with a chance of a truly random spell.":
        "从你的法术列表中随机施放一个法术,有可能是真正随机的法术.",
    "Generate a truly random spell whenever casting.": "每次施放时生成一个真正随机的法术.",
    "Lead-line all your clothing.": "给你的所有衣物加铅衬.",
    "Toggle which spell effects you want to block on yourself.": "切换你想在自己身上屏蔽的法术效果.",
    "Prevent the ability to choose the spell you are casting.": "阻止选择你要施放的法术的能力.",
    "Enabled the use and application of Magic™.": "启用魔法™的使用和应用.",
    "Allowed": "允许",
    "Slumbering": "沉睡",
    "Induces a deep slumber in the target.": "使目标陷入深度沉睡.",
    "Arousing": "唤起",
    "Arouses the target.": "唤醒目标.",
    "Blinding": "致盲",
    "Prevents the target from seeing.": "防止目标看见.",
    "Deafening": "致聋",
    "Prevents the target from hearing.": "防止目标听见.",
    "Gagged": "堵嘴",
    "Gags the target.": "给目标堵嘴.",
    "Petrifying": "石化",
    "Petrifies the target.": "使目标石化.",
    "Enlarging": "增大",
    "Enlarges the target to twice their size.": "将目标的大小增大一倍.",
    "Bless": "祝福",
    "Applies a +5 buff to all the target's skills for 15 minutes": "为目标的所有技能施加+5增益,持续15分钟",
    "Bane": "诅咒",
    "Applies a -5 debuff to all the target's skills for 15 minutes": "为目标的所有技能施加-5减益,持续15分钟",
    "Pairing": "配对",
    "Pair two targets, such that when one feels arousal the other also does.":
        "将两个目标配对,使一个感到性唤醒时另一个也会感到.",
    "Siphoning": "吸取",
    "Redirect all of the target's orgasmic pleasure to another.": "将目标的所有性高潮快感重定向到另一个目标.",
    "Outfit": "服装",
    "Magically change the target's clothing and equipment.": "魔法更改目标的服装和装备.",
    "Polymorph": "变形",
    "Polymorph the target's body and/or cosplay items": "变形目标的身体和/或角色扮演物品",
    "Dispell": "驱散",
    "Dispells any existing effects on the target (including anything drug induced).":
        "驱散目标上的任何现有效果(包括任何药物引起的效果).",
    "X-Ray Vision": "X射线视觉",
    "Grants the target X-Ray vision": "赋予目标X射线视觉",
    "Spell Crafting": "法术制作",
    "No Spells Known...": "没有已知法术...",
    "Create new Spell": "创建新法术",
    "Create your arcane sorceries and potions.": "创建你的奥术巫术和药水.",
    "Remote Allowed Member IDs:": "远程允许的成员ID:",
    "Never Defend:": "永不防御:",
    "Defenseless Against Member IDs:": "无防御能力的成员ID:",
    "Limited Spell Duration:": "有限的法术持续时间:",
    "Maximum Spell Duration:": "最大法术持续时间:",
    "Allow Outfit Spell to Change Neck Items:": "允许装束法术更改颈部物品:",
    "Allow Polymorph Spell to Change Genitals:": "允许变形法术更改生殖器:",
    "Allow Polymorph Spell to Change Pronouns:": "允许变形法术更改代词:",
    "Require Whitelist:": "需要白名单:",
    "If checked, outfit spell effects can modify and replace your neck items.":
        "如果选中,装束法术效果可以修改和替换你的颈部物品.",
    "If checked, polymorph spell effects can modify your genitals.": "如果选中,变形法术效果可以修改你的生殖器.",
    "If checked, polymorph spell effects can modify your pronouns.": "如果选中,变形法术效果可以修改你的代词.",
    "If checked, only people on your whitelist can cast spells on you or teach you spells.":
        "如果选中,只有在你的白名单上的人才能对你施放法术或教授法术.",
    "Maximum amount of time, in minutes, you will be affected by any specific spell effects. Set to 0 for no maximum.":
        "你将受到特定法术效果影响的最长时间,以分钟为单位.设置为0表示没有最长时间.",
    "If checked, you will eventually break free from a detrimental spell's effects, the time variable based on how poorly you fail an activity roll against the caster.":
        "如果选中,你最终会摆脱有害法术的影响,时间变量基于你在与施法者的活动检定中表现不佳的程度.",
    "Comma separated list of member IDs. If empty will use standard Item Permissions. You will never defend against their spells.":
        "以逗号分隔的成员ID列表.如果为空,将使用标准的物品权限.你永远不会对他们的法术进行防御.",
    "If checked, you will never defend against spells cast on you.":
        "如果选中,你将永远不会对施加在你身上的法术进行防御.",
    "Spell Name:": "法术名称:",
    "Allow Potion:": "允许药水:",
    "None": "无",
    "Next": "下一个",
    "Previous": "上一个",
    "Name of your powerful spell": "你强大法术的名称",
    "An effect the spell has.": "法术的效果",
    "Allows this spell to be brewed into a crafted potion bottles/glasses/mugs using its name.":
        "允许将此法术酿造成使用其名称的精心制作的药水瓶/玻璃杯/马克杯.",
    "Delete Spell No. 1": "删除法术编号 1",
    "Delete Spell No. 2": "删除法术编号 2",
    "Delete Spell No. 3": "删除法术编号 3",
    "Effect #1:": "效果 #1:",
    "Effect #2:": "效果 #2:",
    "Effect #3:": "效果 #3:",
    "Spell No. 1": "法术编号 1",
    "Spell No. 2": "法术编号 2",
    "Spell No. 3": "法术编号 3",
    "LSCG Remote Settings": "LSCG 远程设置",
    "You do not have access to her mind...": "你无法访问她的思维...",
    "You do not have access to her collar...": "你无法访问她的项圈...",
    "Section is Unavailable": "该部分不可用",
    "Configure": "配置",
    "Module is deactivated": "模块已停用",
    "Poses": "姿势",
    "~Sign Here~": "~在此签名~",
    "~ Any sufficiently advanced technology is indistinguishable from magic ~":
        "~ 任何足够先进的技术都无法与魔法区分开 ~",
    "* Signatory agrees to Magic™ Installation (ᴘᴀᴛ. ᴘᴇɴᴅ.) required to experience spell effects *":
        "签署者同意魔法™安装(专利申请中)以体验咒语效果",
    "Apply signature to scroll": "在卷轴上签名",
    "Magic": "魔法",
    "Cast Spell": "施放咒语",
    "Wild Magic": "野性魔法",
    "Teach Spell": "教授咒语",
    "Select a spell to cast...": "选择要施放的咒语...",
    "Asleep": "沉睡中",
    "Aroused": "性兴奋",
    "Deafened": "失聪",
    "Blinded": "失明",
    "Enlarged": "巨大化",
    "Petrified": "石化",
    "Blessed": "受祝福",
    "Select a paired target...": "选择一个配对的目标...",
    "Arousal Paired": "高潮配对",
    "Orgasms Siphoned": "吸取性高潮",
    "Baned": "被诅咒",
    "Paste Outfit Code:": "粘贴服装代码:",
    "Redressed": "更衣",
    "Whole Body:": "整体:",
    "Hair:": "头发:",
    "Skin/Jewelry/Makeup:": "皮肤/珠宝/化妆:",
    "Genitals:": "生殖器:",
    "Polymorphed": "变形",
    "Polymorph applies cosplay items from the outfit code.": "变形应用套装代码中的角色扮演道具.",
    "Polymorph changes the target's skin.": "变形改变目标的皮肤.",
    "Polymorph changes the target's genitals.": "变形改变目标的生殖器.",
    "Polymorph modifies the whole body.": "变形修改整个身体.",
    "Cosplay:": "角色装扮:",
    "Hypnotized": "被催眠",

    "Needs BC item permission": "需要BC项权限",
    "Enable Clothed Erection Detection:": "启用穿着勃起检测:",
    "If checked, you will get a private message if you can feel an erection during certain activities.":
        "如果选中, 您将在某些活动中感受到勃起时会收到私信.",
    "Show whisper button on chat messages": "在聊天消息中显示密语按钮",
    "Adds a whisper button to chat messages, allowing you to whisper to the sender more conveniently.":
        "在聊天消息中添加密语按钮, 让您更方便地与发送者进行密语交流.",
    "Control Collar": "控制项圈",
    "Update Collar to Current": "将项圈更新为当前",
    "View next items": "查看下一项",
    "Mode: Preview": "模式:预览",
    "Sold": "已售",
    "Mode: Shop": "模式:商店",
    "Player money": "玩家金钱",
    "Underwear": "内衣",
    "Nude": "裸体",
    "View previous items": "查看上一项",
    "Cosplay": "角色装扮",
    "Allow LSCG Leashing:": "允许 LSCG 捆绑:",
    "Allow custom leashing from LSCG activities such as hand-holding, hypnosis, etc.":
        "允许来自 LSCG 活动的自定义捆绑,如牵手、催眠等.",
    "Enable Suggestion Programming": "启用暗示修改",
    "Allow Suggestion Removal": "允许移除暗示",
    "Always Submit to Suggestions:": "永远服从暗示:",
    "Always Submit to Member IDs:": "永远服从对象 ID:",
    "Blocked Instructions:": "阻止的功能:",
    "Orgasm": "高潮",
    "Induce overwhelming pleasure in the subject.": "在对象身上引发压倒性的愉悦.",
    "If checked, your hypnotizer may induce hypnotic suggestions within you.":
        "如果选中,你的催眠师可以在你身上诱导催眠暗示.",
    "If checked, you can remove suggestions installed in you with '/lscg remove-suggestion' if you are not immersive and not on extreme difficulty.":
        "如果选中,如果你不是沉浸式并且不在极端难度下,你可以使用 '/lscg remove-suggestion' 移除安装在你身上的暗示.",
    "If checked, you will always submit to suggestions.": "如果选中,你将始终服从暗示.",
    "Comma separated list of member IDs. If empty will use standard Item Permissions. You will always submit to their suggestions.":
        "以逗号分隔的成员 ID 列表.如果为空,则使用标准项目权限.你将始终服从他们的暗示.",
    "Toggle which suggestion instructions you want to block on yourself.": "切换你想要自我阻止的暗示指令.",
    "Forget": "忘记",
    "Remove a previous instruction from the subject.": "从对象移除先前的指令.",
    "Serve": "服务",
    "Compel the subject to serve drinks.": "强迫对象提供饮料.",
    "Speak Phrase": "说出短语",
    "Compel the subject to speak a phrase.": "强迫对象说出一个短语.",
    "Follow": "跟随",
    "Compel the subject to follow someone. (Requires LSCG leashing enabled on both)":
        "强迫对象跟随某人.(需要双方都启用 LSCG 捆绑)",
    "Assume Pose": "采取姿势",
    "Compel the subject to assume a pose.": "强迫对象采取一个姿势.",
    "Strip": "脱衣",
    "Make the subjects clothing uncomfortable.": "让对象的衣物变得不舒服.",
    "Perform Activity": "执行活动",
    "Compel the subject to perform an activity.": "强迫对象执行一项活动.",
    "Insatiable": "永不满足",
    "Infuse the subject with an endless arousal.": "注入对象无尽的兴奋.",
    "Denial": "拒绝",
    "Prevent the subject from achieving orgasm.": "阻止对象达到高潮.",
    "[WCE] clear and reload the drawing cache of all characters": "[WCE] 清除并重新加载所有角色的绘图缓存",
};

export { activities, translation };
