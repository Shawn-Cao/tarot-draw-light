/**
 * Rider-Waite-Smith tarot deck data
 * @see https://github.com/Shawn-Cao/tarot-draw
 *
 * imageAlt: physical scene descriptions of Pamela Colman Smith's RWS illustrations,
 * condensed from A. E. Waite, The Pictorial Key to the Tarot (1911).
 */
export const tarotDeck = [
  // Major Arcana
  {
    name: 'The Fool',
    meaning_up:
      'Beginnings, innocence, spontaneity, a free spirit. Taking a leap of faith.',
    meaning_rev:
      'Recklessness, being taken advantage of, inconsideration, risk-taking.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
    imageAlt:
      'A young man in colorful vestments pauses at a cliff edge, white rose in one hand and a staff with a bundle over his shoulder, a small dog at his feet and the sun behind him.',
  },
  {
    name: 'The Magician',
    meaning_up:
      'Manifestation, resourcefulness, power, inspired action. Tapping into your full potential.',
    meaning_rev:
      'Manipulation, poor planning, latent talents, illusion, deception.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
    imageAlt:
      'A robed figure stands before a table bearing a wand, cup, sword, and pentacle, one hand raised to the sky and one pointing to the earth, with an infinity symbol above his head.',
  },
  {
    name: 'The High Priestess',
    meaning_up:
      'Intuition, sacred knowledge, divine feminine, the subconscious mind.',
    meaning_rev:
      'Secrets, disconnected from intuition, withdrawal and silence.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
    imageAlt:
      'A seated woman between black and white pillars marked B and J holds a scroll inscribed TORA, with a crescent moon at her feet and a pomegranate veil behind her.',
  },
  {
    name: 'The Empress',
    meaning_up:
      'Femininity, beauty, nature, nurturing, abundance. A new opportunity.',
    meaning_rev:
      'Creative block, dependence on others, emptiness, lack of growth.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg',
    imageAlt:
      'A crowned woman reclines on a cushioned throne amid wheat and trees, holding a scepter and wearing a star crown over her heart-shaped shield.',
  },
  {
    name: 'The Emperor',
    meaning_up:
      'Authority, establishment, structure, a father figure. Leadership.',
    meaning_rev:
      'Domination, excessive control, lack of discipline, inflexibility.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
    imageAlt:
      'A bearded ruler sits on a stone throne carved with ram heads, holding an orb and scepter against a backdrop of barren red mountains.',
  },
  {
    name: 'The Hierophant',
    meaning_up:
      'Spiritual wisdom, religious beliefs, conformity, tradition, institutions.',
    meaning_rev:
      'Personal beliefs, freedom, challenging the status quo, rebellion.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg',
    imageAlt:
      'A pontiff seated between two pillars blesses two kneeling acolytes, with crossed keys at his feet and a triple crown on his head.',
  },
  {
    name: 'The Lovers',
    meaning_up: 'Love, harmony, relationships, values alignment, choices.',
    meaning_rev:
      'Self-love, one-sidedness, disharmony, misalignment of values.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg',
    imageAlt:
      'An angel with outspread wings blesses naked Adam and Eve in a garden, with the Tree of Knowledge and the Tree of Life on either side.',
  },
  {
    name: 'The Chariot',
    meaning_up: 'Control, willpower, success, action, determination.',
    meaning_rev:
      'Self-discipline, opposition, lack of direction, lack of control.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
    imageAlt:
      'An armored warrior stands in a square chariot beneath a starry canopy, pulled by one black and one white sphinx before a walled city.',
  },
  {
    name: 'Strength',
    meaning_up: 'Strength, courage, persuasion, influence, compassion.',
    meaning_rev: 'Inner strength, self-doubt, weakness, insecurity.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
    imageAlt:
      'A woman in a white robe gently closes the jaws of a lion, an infinity symbol above her head and a garland of flowers around her waist.',
  },
  {
    name: 'The Hermit',
    meaning_up: 'Soul-searching, introspection, being alone, inner guidance.',
    meaning_rev: 'Isolation, loneliness, withdrawal, paranoia.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg',
    imageAlt:
      'An elderly bearded man in a gray cloak stands on a snowy peak, holding a lantern in one hand and a staff in the other.',
  },
  {
    name: 'Wheel of Fortune',
    meaning_up: 'Good luck, karma, life cycles, destiny, a turning point.',
    meaning_rev: 'Bad luck, resistance to change, breaking cycles, delays.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
    imageAlt:
      'A great wheel lettered with TARO and Hebrew signs is topped by a sphinx, with a descending serpent and rising Anubis, and four winged creatures in the corners.',
  },
  {
    name: 'Justice',
    meaning_up: 'Justice, fairness, truth, cause and effect, law.',
    meaning_rev: 'Unfairness, lack of accountability, dishonesty, injustice.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg',
    imageAlt:
      'A crowned figure seated between pillars holds upright scales in one hand and a raised sword in the other, with a purple veil behind.',
  },
  {
    name: 'The Hanged Man',
    meaning_up: 'Pause, surrender, letting go, new perspectives.',
    meaning_rev: 'Delays, resistance, stalling, indecision, needless sacrifice.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
    imageAlt:
      'A man hangs upside down by one foot from a living T-shaped tree, his other leg crossed and his hands clasped behind his back beneath a radiant halo.',
  },
  {
    name: 'Death',
    meaning_up: 'Endings, change, transformation, transition.',
    meaning_rev: 'Resistance to change, personal transformation, inner purging.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
    imageAlt:
      'A skeleton in black armor rides a white horse carrying a black banner with a white rose, while a bishop and others kneel before a setting sun between two towers.',
  },
  {
    name: 'Temperance',
    meaning_up: 'Balance, moderation, patience, purpose.',
    meaning_rev: 'Imbalance, excess, self-healing, re-alignment.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg',
    imageAlt:
      'A winged angel with one foot in water and one on land pours liquid between two cups, with a path leading to mountains crowned by light in the distance.',
  },
  {
    name: 'The Devil',
    meaning_up: 'Shadow self, attachment, addiction, restriction, sexuality.',
    meaning_rev: 'Releasing limiting beliefs, exploring dark thoughts, detachment.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
    imageAlt:
      'A horned goat figure sits on a black pedestal beneath an inverted pentagram, while a chained naked man and woman stand below with small horns and tails.',
  },
  {
    name: 'The Tower',
    meaning_up: 'Sudden change, upheaval, chaos, revelation, awakening.',
    meaning_rev: 'Personal transformation, fear of change, averting disaster.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
    imageAlt:
      'Lightning strikes a tall stone tower, blasting its crown away as two figures fall headlong amid flames and jagged masonry.',
  },
  {
    name: 'The Star',
    meaning_up: 'Hope, faith, purpose, renewal, spirituality.',
    meaning_rev: 'Lack of faith, despair, self-trust, disconnection.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg',
    imageAlt:
      'A naked woman kneels by a pool, pouring water from two pitchers onto land and water beneath one large star and seven smaller stars.',
  },
  {
    name: 'The Moon',
    meaning_up: 'Illusion, fear, anxiety, subconscious, intuition.',
    meaning_rev: 'Release of fear, repressed emotion, inner confusion.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg',
    imageAlt:
      'A full moon with a face sheds drops over a crayfish emerging from a pool, while a dog and wolf howl along a path between two towers.',
  },
  {
    name: 'The Sun',
    meaning_up: 'Positivity, fun, warmth, success, vitality.',
    meaning_rev:
      'Inner child, feeling down, overly optimistic, lack of success.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
    imageAlt:
      'A naked child rides a white horse beneath a radiant sun, holding a red banner before a low wall and tall sunflowers.',
  },
  {
    name: 'Judgement',
    meaning_up: 'Judgement, rebirth, inner calling, absolution.',
    meaning_rev: 'Self-doubt, inner critic, ignoring the call, indecisiveness.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg',
    imageAlt:
      'An angel in clouds blows a trumpet with a cross flag as naked figures rise from coffins below with arms outstretched toward the sky.',
  },
  {
    name: 'The World',
    meaning_up: 'Completion, integration, accomplishment, travel.',
    meaning_rev: 'Seeking personal closure, short-cuts, delays.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
    imageAlt:
      'A dancing figure holds two wands within a laurel wreath held at four corners by an eagle, bull, lion, and human figure.',
  },
  // Suit of Wands
  {
    name: 'Ace of Wands',
    meaning_up: 'Inspiration, new opportunities, growth, potential.',
    meaning_rev: 'An emerging idea, lack of direction, distractions, delays.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg',
    imageAlt:
      'A hand issuing from a cloud grasps a budding wand or branch with sprouting leaves.',
  },
  {
    name: 'Two of Wands',
    meaning_up: 'Future planning, progress, decisions, discovery.',
    meaning_rev: 'Fear of unknown, lack of planning, personal goals.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg',
    imageAlt:
      'A man stands on a battlement holding a globe in one hand and a wand in the other, with a second wand fixed to the wall and ships on the sea below.',
  },
  {
    name: 'Three of Wands',
    meaning_up: 'Progress, expansion, foresight, overseas opportunities.',
    meaning_rev: 'Playing small, lack of foresight, unexpected delays.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Wands03.jpg',
    imageAlt:
      'A man in red robes stands on a cliff watching ships pass on the sea, with three wands planted upright behind him.',
  },
  {
    name: 'Four of Wands',
    meaning_up: 'Celebration, joy, harmony, relaxation, homecoming.',
    meaning_rev: 'Personal celebration, inner harmony, conflict with others.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg',
    imageAlt:
      'Four wands support a flower garland before a castle as two women raise bouquets in celebration.',
  },
  {
    name: 'Five of Wands',
    meaning_up: 'Conflict, disagreements, competition, tension, diversity.',
    meaning_rev: 'Inner conflict, releasing tension, avoiding conflict.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg',
    imageAlt:
      'Five youths brandish wands in a vigorous mock battle on open ground.',
  },
  {
    name: 'Six of Wands',
    meaning_up: 'Public recognition, victory, progress, self-confidence.',
    meaning_rev: 'Private achievement, personal definition of success, fall from grace.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg',
    imageAlt:
      'A rider on a white horse wears a laurel wreath and carries a wand wreathed in leaves while a crowd follows with raised wands.',
  },
  {
    name: 'Seven of Wands',
    meaning_up: 'Challenge, competition, perseverance, protection.',
    meaning_rev: 'Exhaustion, giving up, overwhelmed, lack of confidence.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Wands07.jpg',
    imageAlt:
      'A man on higher ground defends himself with a wand against six wands thrust up at him from below.',
  },
  {
    name: 'Eight of Wands',
    meaning_up: 'Movement, fast paced change, action, alignment.',
    meaning_rev: 'Delays, frustration, resisting change, internal alignment.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg',
    imageAlt:
      'Eight wands fly diagonally through the air above a river and open landscape.',
  },
  {
    name: 'Nine of Wands',
    meaning_up: 'Resilience, courage, persistence, test of faith, boundaries.',
    meaning_rev: 'Inner resources, struggle, overwhelm, defensive, paranoia.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Wands09.jpg',
    imageAlt:
      'A bandaged man leans on a wand while eight wands stand upright behind him like a palisade.',
  },
  {
    name: 'Ten of Wands',
    meaning_up: 'Burden, extra responsibility, hard work, completion.',
    meaning_rev: 'Doing it all, carrying the burden, delegation, release.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg',
    imageAlt:
      'A man bent under the weight of ten wands struggles toward a distant town.',
  },
  {
    name: 'Page of Wands',
    meaning_up: 'Enthusiasm, exploration, discovery, free spirit.',
    meaning_rev: 'Newly-formed ideas, redirecting energy, self-limiting beliefs.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg',
    imageAlt:
      'A youth in a feathered cap stands in a barren landscape looking at a large sprouting wand.',
  },
  {
    name: 'Knight of Wands',
    meaning_up: 'Energy, passion, inspired action, adventure, impulsiveness.',
    meaning_rev: 'Passion project, haste, scattered energy, delays, frustration.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg',
    imageAlt:
      'A knight in armor rides a rearing horse across a desert, holding a wand and wearing a tunic patterned with salamanders.',
  },
  {
    name: 'Queen of Wands',
    meaning_up: 'Courage, confidence, independence, social butterfly, determination.',
    meaning_rev: 'Self-respect, self-confidence, introverted, a muted version of yourself.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg',
    imageAlt:
      'A crowned queen sits on a throne holding a wand and a sunflower, with a black cat at her feet.',
  },
  {
    name: 'King of Wands',
    meaning_up: 'Natural-born leader, vision, entrepreneur, honour.',
    meaning_rev: 'Impulsiveness, haste, ruthless, high expectations.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg',
    imageAlt:
      'A crowned king sits on a throne carved with lions and salamanders, holding an upright wand and looking toward the viewer.',
  },
  // Suit of Cups
  {
    name: 'Ace of Cups',
    meaning_up: 'Love, new relationships, compassion, creativity.',
    meaning_rev: 'Self-love, intuition, repressed emotions.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg',
    imageAlt:
      'A hand from a cloud offers an overflowing chalice from which five streams fall, while a dove descends bearing a host.',
  },
  {
    name: 'Two of Cups',
    meaning_up: 'Unified love, partnership, mutual attraction.',
    meaning_rev: 'Self-love, break-ups, disharmony, distrust.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg',
    imageAlt:
      'A man and woman exchange cups beneath a caduceus and lion-headed staff, with a house on a hill between them.',
  },
  {
    name: 'Three of Cups',
    meaning_up: 'Celebration, friendship, creativity, collaborations.',
    meaning_rev: 'Independence, alone time, hardcore partying, "three\'s a crowd".',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg',
    imageAlt:
      'Three women in flowing dresses dance in a circle, each raising a cup, with fruit scattered on the ground.',
  },
  {
    name: 'Four of Cups',
    meaning_up: 'Meditation, contemplation, apathy, reevaluation.',
    meaning_rev: 'Retreat, withdrawal, checking in for alignment.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg',
    imageAlt:
      'A seated man with crossed arms gazes at three cups before him while a hand from a cloud offers a fourth.',
  },
  {
    name: 'Five of Cups',
    meaning_up: 'Regret, failure, disappointment, pessimism.',
    meaning_rev: 'Personal setbacks, self-forgiveness, moving on.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg',
    imageAlt:
      'A cloaked figure stares at three spilled cups while two upright cups stand behind on a riverbank before a bridge and castle.',
  },
  {
    name: 'Six of Cups',
    meaning_up: 'Revisiting the past, childhood memories, innocence, joy.',
    meaning_rev: 'Living in the past, forgiveness, lacking playfulness.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg',
    imageAlt:
      'A child offers a cup filled with flowers to a smaller child in a garden where six cups stand among blossoms.',
  },
  {
    name: 'Seven of Cups',
    meaning_up: 'Opportunities, choices, wishful thinking, illusion.',
    meaning_rev: 'Alignment, personal values, overwhelmed by choices.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg',
    imageAlt:
      'A figure in shadow faces seven cups floating in clouds, each holding a different vision such as a castle, jewels, or a wreath.',
  },
  {
    name: 'Eight of Cups',
    meaning_up: 'Disappointment, abandonment, withdrawal, escapism.',
    meaning_rev: 'Trying one more time, indecision, aimless drifting, walking away.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg',
    imageAlt:
      'A cloaked figure walks away from eight stacked cups toward moonlit mountains.',
  },
  {
    name: 'Nine of Cups',
    meaning_up: 'Contentment, satisfaction, gratitude, wish come true.',
    meaning_rev: 'Inner happiness, materialism, dissatisfaction, indulgence.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg',
    imageAlt:
      'A satisfied man sits with arms crossed before a curved bench where nine cups are displayed on a blue drapery.',
  },
  {
    name: 'Ten of Cups',
    meaning_up: 'Divine love, blissful relationships, harmony, alignment.',
    meaning_rev: 'Disconnection, misaligned values, struggling relationships.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg',
    imageAlt:
      'A couple raise their arms beneath a rainbow of ten cups while two children play nearby and a home stands in the distance.',
  },
  {
    name: 'Page of Cups',
    meaning_up: 'Creative opportunities, intuitive messages, curiosity, possibility.',
    meaning_rev: 'New ideas, doubting intuition, creative blocks, emotional immaturity.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg',
    imageAlt:
      'A youth in a floral tunic stands by the sea holding a cup from which a fish emerges to speak.',
  },
  {
    name: 'Knight of Cups',
    meaning_up: 'Creativity, romance, charm, imagination, beauty.',
    meaning_rev: 'Overactive imagination, unrealistic, jealous, moody.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg',
    imageAlt:
      'A knight in winged armor rides a slow horse along a river, holding a cup and wearing a fish-emblazoned tunic.',
  },
  {
    name: 'Queen of Cups',
    meaning_up: 'Compassionate, caring, emotionally stable, intuitive, in flow.',
    meaning_rev: 'Inner feelings, self-care, self-love, co-dependency.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg',
    imageAlt:
      'A queen on a throne by the sea gazes at an ornate closed cup, with cherubs carved on her seat and water behind her.',
  },
  {
    name: 'King of Cups',
    meaning_up: 'Emotionally balanced, compassionate, diplomatic.',
    meaning_rev: 'Self-compassion, inner feelings, moodiness, emotionally manipulative.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg',
    imageAlt:
      'A king on a throne set on a stone platform above turbulent sea holds a cup and scepter, with a ship and leaping fish behind him.',
  },
  // Suit of Swords
  {
    name: 'Ace of Swords',
    meaning_up: 'Breakthroughs, new ideas, mental clarity, success.',
    meaning_rev: 'Inner clarity, re-thinking an idea, clouded judgement.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg',
    imageAlt:
      'A hand from a cloud grasps an upright sword crowned with a laurel wreath and palm branch.',
  },
  {
    name: 'Two of Swords',
    meaning_up: 'Difficult decisions, weighing up options, an impasse, avoidance.',
    meaning_rev: 'Indecision, confusion, information overload, stalemate.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Swords02.jpg',
    imageAlt:
      'A blindfolded woman seated by the sea holds two crossed swords against her chest beneath a crescent moon.',
  },
  {
    name: 'Three of Swords',
    meaning_up: 'Heartbreak, emotional pain, sorrow, grief, hurt.',
    meaning_rev: 'Negative self-talk, releasing pain, optimism, forgiveness.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg',
    imageAlt:
      'Three swords pierce a red heart against a stormy gray sky with rain in the distance.',
  },
  {
    name: 'Four of Swords',
    meaning_up: 'Rest, relaxation, meditation, contemplation, recuperation.',
    meaning_rev: 'Exhaustion, burn-out, deep contemplation, stagnation.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg',
    imageAlt:
      'A knight lies in repose on a tomb within a church, with three swords on the wall above and one beneath the effigy.',
  },
  {
    name: 'Five of Swords',
    meaning_up: 'Conflict, disagreements, competition, defeat, winning at all costs.',
    meaning_rev: 'Reconciliation, making amends, past resentment.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg',
    imageAlt:
      'A smirking man collects swords from two defeated figures who walk away, while two swords lie on the ground before him.',
  },
  {
    name: 'Six of Swords',
    meaning_up: 'Transition, change, rite of passage, releasing baggage.',
    meaning_rev: 'Personal transition, resistance to change, unfinished business.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg',
    imageAlt:
      'A ferryman poles a boat carrying a woman and child across calm water, with six swords standing upright in the prow.',
  },
  {
    name: 'Seven of Swords',
    meaning_up: 'Betrayal, deception, getting away with something, acting strategically.',
    meaning_rev: 'Imposter syndrome, self-deceit, keeping secrets.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg',
    imageAlt:
      'A man tiptoes away from a camp carrying five swords while two remain planted in the ground near tents.',
  },
  {
    name: 'Eight of Swords',
    meaning_up: 'Negative thoughts, self-imposed restriction, imprisonment, victim mentality.',
    meaning_rev: 'Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg',
    imageAlt:
      'A blindfolded woman stands bound among eight swords stuck in muddy ground, with a castle on a hill in the distance.',
  },
  {
    name: 'Nine of Swords',
    meaning_up: 'Anxiety, worry, fear, depression, nightmares.',
    meaning_rev: 'Inner turmoil, deep-seated fears, secrets, releasing worry.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg',
    imageAlt:
      'A person sits up in bed with head in hands beneath nine swords mounted horizontally on a dark wall, a quilt patterned with roses and astrological symbols below.',
  },
  {
    name: 'Ten of Swords',
    meaning_up: 'Painful endings, deep wounds, betrayal, loss, crisis.',
    meaning_rev: 'Recovery, regeneration, resisting an inevitable end.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg',
    imageAlt:
      'A figure lies face down with ten swords in his back beneath a black sky, with calm water and distant hills on the horizon.',
  },
  {
    name: 'Page of Swords',
    meaning_up: 'New ideas, curiosity, thirst for knowledge, new ways of communicating.',
    meaning_rev: 'Self-expression, all talk and no action, haphazard action, haste.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg',
    imageAlt:
      'A lithe youth stands alert on a windswept hill holding a sword upright with both hands, birds flying in a turbulent sky.',
  },
  {
    name: 'Knight of Swords',
    meaning_up: 'Ambitious, action-oriented, driven to succeed, fast-thinking.',
    meaning_rev: 'Restless, unfocused, impulsive, burn-out.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg',
    imageAlt:
      'An armored knight charges on a white horse with sword raised through stormy clouds and bent trees.',
  },
  {
    name: 'Queen of Swords',
    meaning_up: 'Independent, unbiased judgement, clear boundaries, direct communication.',
    meaning_rev: 'Overly-emotional, easily influenced, bitchy, cold-hearted.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg',
    imageAlt:
      'A crowned queen on a throne holds an upright sword in one hand and extends the other, with butterflies on her crown and a single bird in the sky.',
  },
  {
    name: 'King of Swords',
    meaning_up: 'Mental clarity, intellectual power, authority, truth.',
    meaning_rev: 'Quiet power, inner truth, misuse of power, manipulation.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg',
    imageAlt:
      'A stern king on a throne holds an upright sword in one hand and wears a blue robe decorated with crescent moons and butterflies.',
  },
  // Suit of Pentacles
  {
    name: 'Ace of Pentacles',
    meaning_up: 'A new financial or career opportunity, manifestation, abundance.',
    meaning_rev: 'Lost opportunity, lack of planning and foresight.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg',
    imageAlt:
      'A hand from a cloud holds a golden pentacle over a garden arch leading to mountains.',
  },
  {
    name: 'Two of Pentacles',
    meaning_up: 'Multiple priorities, time management, prioritisation, adaptability.',
    meaning_rev: 'Over-committed, disorganisation, re-prioritisation.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg',
    imageAlt:
      'A dancing youth juggles two pentacles linked by an infinity ribbon, with ships riding waves behind him.',
  },
  {
    name: 'Three of Pentacles',
    meaning_up: 'Teamwork, collaboration, learning, implementation.',
    meaning_rev: 'Disharmony, misalignment, working alone.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg',
    imageAlt:
      'A stonemason works on a cathedral arch while a monk and a master hold plans showing three pentacles set in the stonework.',
  },
  {
    name: 'Four of Pentacles',
    meaning_up: 'Saving money, security, conservatism, scarcity, control.',
    meaning_rev: 'Over-spending, greed, self-protection.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg',
    imageAlt:
      'A seated man tightly holds one pentacle to his chest while another rests on his crown and two are under his feet, with a city behind him.',
  },
  {
    name: 'Five of Pentacles',
    meaning_up: 'Financial loss, poverty, lack mindset, isolation, worry.',
    meaning_rev: 'Recovery from financial loss, spiritual poverty.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg',
    imageAlt:
      'Two ragged figures hobble through snow past a stained-glass window showing five pentacles and a lighted interior.',
  },
  {
    name: 'Six of Pentacles',
    meaning_up: 'Giving, receiving, sharing wealth, generosity, charity.',
    meaning_rev: 'Self-care, unpaid debts, one-sided charity.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg',
    imageAlt:
      'A merchant with scales dispenses coins to two kneeling beggars while six pentacles float above him.',
  },
  {
    name: 'Seven of Pentacles',
    meaning_up: 'Long-term view, sustainable results, perseverance, investment.',
    meaning_rev: 'Lack of long-term vision, limited success or reward.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg',
    imageAlt:
      'A man leaning on a staff pauses to study a pentacle on a bush, with six more pentacles hanging on the vine.',
  },
  {
    name: 'Eight of Pentacles',
    meaning_up: 'Apprenticeship, repetitive tasks, mastery, skill development.',
    meaning_rev: 'Self-development, perfectionism, misdirected activity.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg',
    imageAlt:
      'A craftsman at a bench engraves pentacles, with five finished coins hung on the wall and one on his worktable.',
  },
  {
    name: 'Nine of Pentacles',
    meaning_up: 'Abundance, luxury, self-sufficiency, financial independence.',
    meaning_rev: 'Self-worth, over-investment in work, hustling.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg',
    imageAlt:
      'A well-dressed woman in a garden holds a hooded falcon on her gloved hand, with nine pentacles on a grape arbor and a snail at her feet.',
  },
  {
    name: 'Ten of Pentacles',
    meaning_up: 'Wealth, financial security, family, long-term success, contribution.',
    meaning_rev: 'The dark side of wealth, financial failure or loss.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg',
    imageAlt:
      'An elderly man with dogs talks with a couple and child beneath an archway marked with ten pentacles, with a walled town beyond.',
  },
  {
    name: 'Page of Pentacles',
    meaning_up: 'Manifestation, financial opportunity, skill development.',
    meaning_rev: 'Lack of progress, procrastination, learn from failure.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Pents11.jpg',
    imageAlt:
      'A youth in a red cap stands in a plowed field gazing intently at a pentacle held up in both hands, with mountains and trees behind.',
  },
  {
    name: 'Knight of Pentacles',
    meaning_up: 'Hard work, productivity, routine, conservatism.',
    meaning_rev: 'Self-discipline, boredom, feeling "stuck", perfectionism.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg',
    imageAlt:
      'A knight on a heavy dark horse holds a pentacle and sits still before plowed fields and distant mountains.',
  },
  {
    name: 'Queen of Pentacles',
    meaning_up: 'Nurturing, practical, providing financially, a working parent.',
    meaning_rev: 'Financial independence, self-care, work-home conflict.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Pents13.jpg',
    imageAlt:
      'A queen on a throne in a flowering garden cradles a pentacle in her lap, with a rabbit at her feet and roses and grapes around her.',
  },
  {
    name: 'King of Pentacles',
    meaning_up: 'Wealth, business, leadership, security, discipline, abundance.',
    meaning_rev: 'Financially inept, obsessed with wealth and status, stubborn.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg',
    imageAlt:
      'A crowned king on a throne decorated with bull heads and grape vines holds a pentacle and scepter, with a castle and terraced garden behind him.',
  },
];
