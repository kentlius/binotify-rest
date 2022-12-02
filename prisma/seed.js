const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

async function main() {
  const hashedPassword = await bcrypt.hash("password", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@binotify.com" },
    update: {},
    create: {
      email: "admin@binotify.com",
      password: hashedPassword,
      username: "admin",
      name: "Admin",
      isadmin: true,
    },
  });

  const kent = await prisma.user.upsert({
    where: { email: "kent@binotify.com" },
    update: {},
    create: {
      email: "kent@binotify.com",
      password: hashedPassword,
      username: "kent",
      name: "Kent Liu",
      songs: {
        create: [
          {
            judul: "Yoru ni Kakeru",
            audio_path: "./uploads/audio/yoru_ni_kakeru.mp3",
          },
          {
            judul: "Kimi no Shiranai Monogatari",
            audio_path: "./uploads/audio/kimi_no_shiranai_monogatari.mp3",
          },
          {
            judul: "Hikaru Nara",
            audio_path: "./uploads/audio/hikaru_nara.mp3",
          },
          {
            judul: "Kimi wa Melody",
            audio_path: "./uploads/audio/kimi_wa_melody.mp3",
          },
          {
            judul: "Ano Hi Mita",
            audio_path: "./uploads/audio/ano_hi_mita.mp3",
          },
        ],
      },
    },
  });

  const vionie = await prisma.user.upsert({
    where: { email: "vionie@binotify.com" },
    update: {},
    create: {
      email: "vionie@binotify.com",
      password: hashedPassword,
      username: "vionie",
      name: "Vionie Novencia",
      songs: {
        create: [
          {
            judul: "Love Shot",
            audio_path: "./uploads/audio/love_shot.mp3",
          },
          {
            judul: "Ddu-du Ddu-du",
            audio_path: "./uploads/audio/ddu_du_ddu_du.mp3",
          },
          {
            judul: "Dance The Night Away",
            audio_path: "./uploads/audio/dance_the_night_away.mp3",
          },
          {
            judul: "Energetic",
            audio_path: "./uploads/audio/energetic.mp3",
          },
          {
            judul: "Dynamite",
            audio_path: "./uploads/audio/dynamite.mp3",
          },
        ],
      },
    },
  });

  const aldwin = await prisma.user.upsert({
    where: { email: "aldwin@binotify.com" },
    update: {},
    create: {
      email: "aldwin@binotify.com",
      password: hashedPassword,
      username: "aldwin",
      name: "Aldwin Hardi Swastia",
      songs: {
        create: [
          {
            judul: "Fallin' In Love",
            audio_path: "./uploads/audio/fallin_in_love.mp3",
          },
          {
            judul: "I Wanna Dance With Somebody",
            audio_path: "./uploads/audio/i_wanna_dance_with_somebody.mp3",
          },
          {
            judul: "I Will Always Love You",
            audio_path: "./uploads/audio/i_will_always_love_you.mp3",
          },
          {
            judul: "I'll Make Love To You",
            audio_path: "./uploads/audio/ill_make_love_to_you.mp3",
          },
          {
            judul: "It's Not Right But It's Ok",
            audio_path: "./uploads/audio/its_not_right_but_its_ok.mp3",
          },
          {
            judul: "Kiss From A Rose",
            audio_path: "./uploads/audio/kiss_from_a_rose.mp3",
          },
          {
            judul: "Lady Marmalade",
            audio_path: "./uploads/audio/lady_marmalade.mp3",
          },
          {
            judul: "Let's Get It On",
            audio_path: "./uploads/audio/lets_get_it_on.mp3",
          },
          {
            judul: "My Heart Will Go On",
            audio_path: "./uploads/audio/my_heart_will_go_on.mp3",
          },
          {
            judul: "No Scrubs",
            audio_path: "./uploads/audio/no_scrubs.mp3",
          },
          {
            judul: "Rock With You",
            audio_path: "./uploads/audio/rock_with_you.mp3",
          },
          {
            judul: "Smooth Criminal",
            audio_path: "./uploads/audio/smooth_criminal.mp3",
          },
          {
            judul: "Unbreak My Heart",
            audio_path: "./uploads/audio/unbreak_my_heart.mp3",
          },
          {
            judul: "We Found Love",
            audio_path: "./uploads/audio/we_found_love.mp3",
          },
          {
            judul: "What's Luv",
            audio_path: "./uploads/audio/whats_luv.mp3",
          },
          {
            judul: "With Or Without You",
            audio_path: "./uploads/audio/with_or_without_you.mp3",
          },
          {
            judul: "You Are Not Alone",
            audio_path: "./uploads/audio/you_are_not_alone.mp3",
          },
        ],
      },
    },
  });
  console.log({ admin, kent, vionie, aldwin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
