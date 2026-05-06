type ResponseError = {
  smille: string;
  title: string;
  description: string;
  errorCode: string;
  statusCode: number;
  buttons: string[];
};

const dataErrors: ResponseError[] = [
  {
    statusCode: 500,
    errorCode: "ERR_500",
    title: "Что-то пошло не так",
    description:
      "Произошла непредвиденная ошибка. Пожалуйста, попробуйте еще раз или обратитесь в поддержку.",
    smille: "😕",
    buttons: ["Попробовать снова", "Вернуться назад"],
  },
  {
    statusCode: 402,
    errorCode: "PAY_ERR_402",
    title: "Платёж не прошёл",
    description:
      "К сожалению, не удалось завершить платёж. Проверьте данные карты и попробуйте снова.",
    smille: "💸",
    buttons: ["Попробовать снова", "Выбрать другую карту"],
  },
  {
    statusCode: 403,
    errorCode: "PUB_ERR_403",
    title: "Не удалось опубликовать проект",
    description:
      "Возникла проблема при публикации. Проверьте данные проекта и повторите попытку.",
    smille: "📝",
    buttons: ["Вернуться к редактированию", "Сохранить черновик"],
  },
  {
    statusCode: 409,
    errorCode: "REG_ERR_409",
    title: "Регистрация не завершена",
    description:
      "Не удалось завершить регистрацию. Возможно, аккаунт с таким email уже существует.",
    smille: "👤",
    buttons: ["Войти", "Восстановить пароль"],
  },
  {
    statusCode: 503,
    errorCode: "NET_ERR_503",
    title: "Нет соединения с сервером",
    description:
      "Проверьте подключение к интернету и попробуйте перезагрузить страницу.",
    smille: "🌐",
    buttons: ["Попробовать снова", "Перезагрузить страницу"],
  },
  {
    statusCode: 404,
    errorCode: "ERR_404",
    title: "Страница не найдена",
    description:
      "Запрашиваемая страница не существует или была удалена. Попробуйте найти нужный проект через поиск.",
    smille: "🔍",
    buttons: ["На главную", "Поиск проектов"],
  },
];

export const returnDescriptionError = (statusCode: number): ResponseError => {
  return (
    dataErrors.find((err) => err.statusCode === statusCode) ?? dataErrors[0]
  );
};
