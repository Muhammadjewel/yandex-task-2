Для второго задания схема базы данных моего решения должен был быть таким:
Я использовал MongoDB. Так как я не знал бекенд, хотел сделать по видеоуроку по этой ссылке: https://www.youtube.com/watch?v=eB9Fq9I5ocs

В базе данных будут 3 коллекции:
1. Лекции
{
  "lecture_id" : ID,
  "lecture_topic" : "Topic",
  "lecture_lecturer" : "Professor",
  "lecture_time" : Date(),
  "lecture_date" : Date(),
  "room" : "roomName",
  "schools" : ["Design School", "Mobdev school"]
}
2. Школы
{
  "school_name" : "Design School",
  "school_students_count" : 88
}
3. Аудитории
{
  "room_name" : "Olmos",
  "room_seats" : 100,
  "room_destination" : "Eski shahar"
}

Лекция будет связана с остальнымы коллекциями через имена комнаты и школы. В процессе создании базы данных были 2 возможных решения: внедрить Школу и Комнату в Лекции как подколлекции. Но это могло быть причиной аномалий при обновлении данных и дупликации данных. Я выбрал второй путь и решил связать коллекции через имена. Для этого будет добавлен уникальный индекс в поле имен Школы и Комнаты. Я выбрал эти поля для ID, потому что по логике не будут школы и комнаты с одинаковыми названиями. Это могло быть причиной недопониманий со стороны студентов.

Для показания расписания школы в заданный интервал дат я мог бы использовать аггрегацию:
например: select... where school_name = "argument school" AND date BETWEEN givenDateStart AND givenTimeEnd

Во втором запросе нужно будет изменить school_name = "argument school" на WHERE room_name = "room Arg"