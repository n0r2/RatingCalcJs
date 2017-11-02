(function () {
    function get_data(method, url, data = null) {
        return $.ajax({
            url: 'https://chunithm-net.com/mobile/' + url,
            method: method,
            data: data,
            async: false
        });
    }


    function get_music_data(level) {
        var post_data = {
            genre: '99',
            level: level,
            music_genre: 'music_genre'
        };
        var return_data = {};
        get_data('POST', 'MusicGenre.html', post_data).done(function (data) {
            $(data).find('.musiclist_box').each(function (index) {
                var id = parseInt($(this).find('.music_title').attr('onclick').substr(54));
                var score_raw = $(this).find('.text_b');
                var score = score_raw.length ? parseInt($(score_raw).text().split(',').join('')) : -1;
                var lamps = []
                $(this).find('img').each(function (index) {
                    lamps.push($(this).attr('src').substr(14));
                });
                return_data[id] = { score: score, lamps: lamps };
            });
        });
        return return_data;
    }

    function get_user_data() {
        return_data = {};
        get_data('GET', 'UserInfoDetail.html').done(function (data) {
            return_data['trophy'] = $(data).find('.player_honor_text > span').text();
            return_data['reborn'] = parseInt(0 + $(data).find('.player_reborn_0').text());
            return_data['level'] = parseInt($(data).find('.player_lv').text().replace(/[^0-9^]/g, ""));
            return_data['name'] = $(data).find('.ml_10').text();
            var rating = $(data).find('.player_rating').text().split('/');
            return_data['current_rating'] = parseFloat(rating[0].replace(/[^0-9^/.]/g, ""));
            return_data['max_rating'] = parseFloat(rating[1].replace(/[^0-9^/.]/g, ""));
            var playpoint = $(data).find('.user_data_playpoint').text().split('：');
            return_data['current_playpoint'] = parseInt(playpoint[0]);
            return_data['total_playpoint'] = parseInt(playpoint[1]);
            return_data['playcount'] = parseInt($(data).find('.user_data_play').text());
        });
        return return_data;
    }

    function get_user_id() {
        var user_id = 0;
        get_data('GET', 'FriendSearch.html').done(function (data) {
            if($(data).find('#page_title').text() == 'エラー') {
                alert('error');
                aiueo();
            }
            user_id = parseInt($(data).find('.mt_15').text().replace(/[^0-9^/.]/g, ""));
        })
        return user_id;
    }

    function submit(submit_data) {
        $.ajax(
            {
                url: 'https://mharuna.net/receive.php',
                type: 'POST',
                data: JSON.stringify(submit_data),
                dataType: 'json',
                async: false
            }
        ).done(function (data) {
            console.log(data)
            return data;
        });
    }

    function start() {
        console.time('timer1');
        var submit_data = { user_id: get_user_id(), user_data: get_user_data(), expert: get_music_data('expert'), master: get_music_data('master') };
        console.log(submit_data);
        var response = submit(submit_data);
        console.timeEnd('timer1');
        location.href = 'https://mharuna.net/';
    }

    start()
})();