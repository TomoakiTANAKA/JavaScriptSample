$("form").validate({
    rules: {
        "menu[]": {
            required: true
        },
        date: {
            require_from_group: [1, ".date_group"]
        },
        mail: {
            requuired: true
        },

    },
    messages: {
        "menu[]": {
            required: "ご希望のメニューを選択してください"
        },
        date: {
            require_from_group: "日時を選択してください。"
        },
        mail: {
            requuired: "メールアドレスを入力して下さい。"
        },

    }
});