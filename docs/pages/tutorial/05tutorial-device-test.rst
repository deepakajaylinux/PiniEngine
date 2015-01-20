.. PiniEngine documentation master file, created by
   sphinx-quickstart on Wed Dec 10 17:29:29 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. raw:: html

    <script src="../../_static/zeroclipboard/ZeroClipboard.js"></script>
    <script src="../../_static/copyClipboard.js"></script>

.. _05_튜토리얼:

05. 모바일 기기로 게임 테스트 하기
**********************************************************
피니엔진에서 '바로 테스트'를 통한 PC에서 테스트를 제공하며 또한 자신이 가진 모바일 기기를 통해 테스트 할 수 있습니다.
피니엔진이 실행되고 있는 PC와 테스트 할 모바일 기기는 같은 네트워크에 있어야 합니다. **즉 같은 공유기로 인터넷을 사용하고 있어야 합니다.** (이를 `LAN <http://ko.wikipedia.org/wiki/%EA%B7%BC%EA%B1%B0%EB%A6%AC_%ED%86%B5%EC%8B%A0%EB%A7%9D>`_ 이라 합니다.)
수동 연결시에도 마찬가지로 같은 네트워크에 있어야 합니다.

일단 먼저 메뉴에서 "테스트->기기 테스트"를 눌러 봅시다. 아래와 같은 창을 확인하실수 있으실 겁니다.

.. image:: http://i.imgur.com/uAVXmtU.png
    :scale: 100%

아래의 2가지 조건이 충족 됬을때 "검색하기" 버튼을 누르시면 실행 가능한 대상의 기기들이 나타나게 됩니다.

#. PC와 테스트 할 기기가 같은 네트워크 안에 있어야 합니다.
#. 테스트 할 기기에선 테스트 전용 프로그램(리모트앱)이 실행되고 있어야 합니다.

.. image:: http://i.imgur.com/LuNzYHy.gif
    :scale: 100%

.. seealso::
    안드로이드 리모트 앱은 피니엔진이 설치되어 있는 경로 아래에 "pini_update\\resource\\android"에 있습니다.
    또한 리모트 앱을 모바일 기기에 설치하는 방법이 궁금하시다면 아래의 링크를 참고해주시기 바랍니다.
    `안드로이드 APK 설치방법 <http://ggari.tistory.com/186>`_

목록이 뜨고 난 후 테스트를 원하는 기기의 아이콘을 더블 클릭하시면 PC에서 테스트 기기로 이미지와 스크립트와 같은 리소스들이 전송되고 실행됩니다.
리소스가 크다면 전송하는데 어느 정도 시간이 걸릴수 있습니다.

자동 연결이 안된다면 수동연결을 시도해 봅시다.
=================================================
위에서 자동 연결과 마찬가지로 아래와 같은 2가지 조건을 충족하여야 수동연결이 가능합니다.

#. PC와 테스트 할 기기가 같은 네트워크 안에 있어야 합니다.
#. 테스트 할 기기에선 테스트 전용 프로그램(리모트앱)이 실행되고 있어야 합니다.

.. image:: http://i.imgur.com/WkJYLnv.png
    :scale: 100%

위 창에 입력할 IP주소는 자신의 모바일 기기의 설정앱의 네트워크 관련 부분에서 찾으실 수 있습니다.
안드로이드 폰의 경우 핸드폰의 기종과 OS 버전 별로 IP주소가 표시되어 있는 위치가 다를 수 있습니다.
