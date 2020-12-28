var result = document.getElementById('result');
var answer_form = document.getElementById('answer_form');
var answer = document.getElementById('answer');
var retry_button = document.getElementById('retry_button');
var chance = document.getElementById('chance');
var number_candidate;
var number_picked;
var wrong = 0;

function number_random() {
    number_candidate = [1,2,3,4,5,6,7,8,9];
    number_picked = [];
    for (i = 0; i < 4; i += 1) {
        var picked = number_candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        number_picked.push(picked);
    }
    console.log(number_picked); // 뽑힌 수 확인
}

function clear() { //초기화 설정
    answer.value='';
    answer.focus();
    wrong = 0;
    chance.textContent = 7;
}

function done () { //기회 모두 소진했을때 뜨는 알림창
    alert('기회 모두 소진! 정답은 '+number_picked+'였습니다. 다시 도전해 보세요.')
}

// 게임 초기 화면&설정
result.textContent = '맞춰봐요 숫자야구'
number_random();
answer.focus();
chance.textContent = 7;

// 엔터를 누를 시 발생 이벤트
answer_form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (answer.value === number_picked.join('')) { // 한번에 정답을 맞추었을 경우
        result.textContent = "깡!!!!! 호옴런!"
        number_random();
        clear();
    } else { // 한번에 정답을 못맞췄을 경우
        var answer_array = answer.value.split('');
        var strike = 0;
        var ball = 0;
        wrong += 1;
        chance.textContent -= 1;
        if (wrong >= 7) { // 제공 기회 모두 소진했을 경우
            result.textContent = '맞춰봐요 숫자야구'
            done();
            number_random();
            clear();
        } else { // 오답횟수 6회까지 진행
            for (i = 0; i < 4; i +=1) { // 숫자야구가 4개 숫자로 구성되어 있으므로 4번 반복하면 된다.
                if (Number(answer_array[i]) === number_picked[i]) { // 스트라이크 상황
                    strike += 1;
                } else if (number_picked.indexOf(Number(answer_array[i])) > -1) { // 볼 상황
                    ball += 1;
                }
            }
            result.textContent = '현재 '+strike+'스트라이크 '+ball+'볼 입니다.'
            answer.value='';
            answer.focus();
        }
    }
})

retry_button.addEventListener('click', function (r) { // 새로운 게임 시작하기
    number_candidate = [1,2,3,4,5,6,7,8,9];
    number_picked = [];
    for (i = 0; i < 4; i += 1) {
        var picked = number_candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        number_picked.push(picked);
    }
    clear();
});