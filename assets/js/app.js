msg_array = [
    "Самые теплые поздравления с Международным женским днем! Желаем тебе радости, улыбок и любви каждый день.",
    "Сегодня праздник всех прекрасных женщин, и ты одна из них! Пусть все твои мечты сбываются.",
    "Ты - настоящая леди и воплощение женственности! Поздравляем тебя с Международным женским днем.",
    "Сегодня мы хотим пожелать тебе множество прекрасных мгновений, красивых цветов и неповторимого счастья. С праздником!",
    "Ты такая талантливая и умная женщина! Желаем тебе продолжать свои успехи и достигать новых вершин.",
    "Ты - надежда и опора для своих близких. Пусть сегодняшний праздник принесет тебе много улыбок и тепла.",
    "Сегодня день, когда мы отмечаем все, что ты делаешь для своей семьи и друзей. Спасибо за все, что ты делаешь! С праздником!",
    "Ты всегда готова прийти на помощь и поддержать. Пусть этот день будет наполнен приятными сюрпризами и массой любви.",
    "Поздравляем тебя с Международным женским днем! Желаем тебе, чтобы все твои мечты стали яркой реальностью.",
    "Сегодня - праздник настоящих красавиц! Ты, безусловно, одна из них. Пусть твоя жизнь будет наполнена яркими красками и счастьем.",
    "Сегодня - твой праздник, и мы хотим пожелать тебе, чтобы ты продолжала восхищать и вдохновлять окружающих своими достижениями и талантами.",
    "Поздравляю тебя с Международным женским днем! Желаем тебе много радости, любви и счастья в жизни!",
    "С праздником 8 марта! Желаем тебе здоровья и успехов во всем!",
    "Поздравляем тебя с 8 марта и желаем всего самого наилучшего. Ты очень умная и красивая женщина!",
    "С праздником 8 марта! Желаем тебе любви, радости и успеха во всех начинаниях.",
    "Сегодня мы хотим пожелать тебе много радости, улыбок и счастья в этот прекрасный праздник! С 8 марта!",
    "Поздравляем с 8 марта! Ты удивительная женщина и заслуживаешь только самого лучшего.",
    "Сегодня мы хотим поздравить тебя с наступающим праздником весны. Пусть твоя жизнь будет наполнена только радостью и удачей!",
    "Желаем тебе, чтобы все твои мечты сбывались, а жизнь была наполнена только положительными эмоциями. С 8 марта!",
    "С наступающим 8 марта! Пусть этот день принесет тебе много радости и счастья!",
    "Ты красива, умна и талантлива. Желаем тебе оставаться такой же прекрасной и успешной. С праздником весны!",
    "Ты прекрасная женщина с яркой индивидуальностью и неповторимым характером. Пусть этот праздник принесет тебе только позитивные эмоции и много счастья!",
    "С наступающим 8 марта! Пусть этот день принесет тебе много тепла, любви и заботы.",
    "С наступающим 8 марта! Желаем тебе любви, радости и успеха во всех начинаниях.",
    "Сегодня мы хотим пожелать тебе много радости, улыбок и счастья в этот прекрасный праздник!",
    "Ты удивительная женщина и заслуживаешь только самого лучшего. Поздравляем с 8 марта!",
    "Сегодня мы хотим поздравить тебя с наступающим праздником весны. Пусть твоя жизнь будет наполнена только радостью и удачей!",
    "Желаем тебе, чтобы все твои мечты сбывались, а жизнь была наполнена только положительными эмоциями. С 8 марта!",
    "С 8 марта! Пусть этот день принесет тебе много радости и счастья!",
    "Ты красива, умна и талантлива. Желаем тебе оставаться такой же прекрасной и успешной. С праздником весны!",
    "С наступающим 8 марта! Пусть этот день принесет тебе много тепла, любви и заботы.",
    "Поздравляем с весенним праздником! Желаем тебе быть счастливой и любимой!",
    "С 8 марта! Будь всегда такой же прекрасной и уверенной в себе!",
    "Поздравляем с 8 марта! Желаем оставаться такой же яркой и прекрасной!",
    "С наступающим праздником весны! Желаем тебе мирного неба, тепла и уютного дома!",
    "Ты - самая замечательная женщина, поздравляем с 8 марта! Желаем тебе новых побед и достижений!",
    "С наступающим 8 марта! Ты - настоящая женщина с большой буквы!",
    "Ты - настоящая героиня, поздравляем с 8 марта! Желаем тебе здоровья, удачи и любви!",
    "Поздравляем с весенним праздником! Ты - настоящая красавица и очаровательная женщина!",
    "С 8 Марта! Желаем тебе радости, счастья и любви в жизни!",
    "Поздравляем тебя с Международным Женским Днем! Ты такая умная и талантливая женщина!",
    "С Днем 8 Марта! Желаем тебе, чтобы все мечты сбывались и ты была счастлива!",
    "Поздравляем тебя с Женским Днем! Желаем тебе, чтобы каждый день был наполнен любовью и удачей!",
    "С 8 Марта! Желаем тебе большого счастья, здоровья и удачи во всех начинаниях!",
    "Счастливого 8 Марта! Мы желаем тебе, чтобы все твои мечты стали яркой реальностью!",
    "Счастливого Дня 8 Марта! Мы желаем тебе много улыбок, счастья и нежности в твоей жизни!",
    "С наступающим 8 Марта! Мы желаем тебе быть счастливой и удачливой во всех твоих начинаниях!",
    "Поздравляем с 8 марта! Желаем, чтобы твоя жизнь была наполнена радостью и счастьем!",
    "Поздравляем с международным женским днем! Желаем тебе большого успеха и много радости в жизни!",
    "Самые теплые пожелания с 8 марта! Ты уникальна и неповторима.",
    "С днем весны и красоты! Желаем тебе, чтобы ты всегда была окружена любовью и заботой!",
    "С наступающим праздником! Желаем, чтобы все твои мечты сбылись!",
    "Ты уникальна и неповторима! Желаем тебе, чтобы твоя жизнь была наполнена радостью и удовольствием!",
    "С наступающим праздником! Желаем тебе большой любви, уважения и счастья!",
    "Поздравляем с праздником! Желаем тебе всегда оставаться такой же красивой и умной!",
    "Самые теплые пожелания с 8 марта! Пусть этот день будет наполнен улыбками и твои мечты сбываются!",
    "С наступающим праздником! Желаем, чтобы твоя жизнь была наполнена радостью, любовью и успехом!",
    "С днем весны и красоты! Ты - прекрасная женщина, и твоя красота всегда поражает нас!"
];

numberr = msg_array[Math.floor(Math.random() * msg_array.length)];
window.onload = function () {
    wipe(document.querySelector('.label'));
    delay_type(document.querySelector('.label'), numberr, 0, 70);
}
