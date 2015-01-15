.. PiniEngine documentation master file, created by
   sphinx-quickstart on Wed Dec 10 17:29:29 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. raw:: html

    <script src="../../_static/zeroclipboard/ZeroClipboard.js"></script>
    <script src="../../_static/copyClipboard.js"></script>

.. _06_튜토리얼:

06. 내보내기 기능을 사용하여 내 게임을 배포하기
**********************************************************

피니엔진에서 만든 프로젝트는 현재 윈도우와 안드로이드에서 설치/배포 가능한 형태로 만들어주는 내보내기 기능을 가지고 있습니다.

.. contents:: 목차

----------

일단 내보내기를 하기 위해선 아래 사진과 같이 빨간색 화살표 쳐있는 부분에서 원하는 OS용 내보내기를 누르시면 됩니다.

.. image:: http://i.imgur.com/4dwxV3I.png
    :scale: 100%

----------

윈도우 내보내기
==============================================
일단 윈도우 내보내기를 먼저 해봅시다. '파일-익스포트-윈도우' 버튼을 누르면 하단의 사진과 같은 창을 보실수 있을겁니다.
빨간색 사각형 부분의 버튼을 사용하여 .exe 확장자 형식의 실행 파일이 생길 위치 정해줄 수 있습니다.
또한 주황색 사각형 부분의 버튼을 사용하여 실행 파일의 아이콘 이미지를 원하는 이미지로 정해줄 수 있습니다.

.. image:: http://i.imgur.com/bIvEfbZ.png
    :scale: 100%

아래 사진과 같이 '게임명','버전정보','저장위치','배포자명'과 아이콘 이미지를 모두 정하셨다면 '익스포트' 버튼을 눌러보도록 합시다.

.. image:: http://i.imgur.com/Nr7naIK.png
    :scale: 100%

그러곤 조금 기다리시면 아래와 같은 창을 보실수 있으실 겁니다.

.. image:: http://imgur.com/XCsbUG9
    :scale: 100%

여기서 '인스톨러 생성' 버튼을 누르시면 아래와 같은 화면을 보실수 있습니다.

.. image:: http://i.imgur.com/G3ucZ9b.png
    :scale: 100%

그리곤 또 한번 더 '인스톨러 생성' 버튼을 누르시면 아까 전 익스포트 '저장위치'로 정해 놓으신 경로에서 'installer.exe' 파일이 있는것을 확인할 수 있을겁니다.


----------

안드로이드 내보내기
==============================================
다음으로 안드로이드 내보내기를 해보도록 합시다. '파일-익스포트-안드로이드' 버튼을 누르면 하단의 사진과 같은 창을 보실수 있을겁니다.

.. image:: http://i.imgur.com/AqGSzLV.png
    :scale: 100%

여기서 다음 버튼을 누르시면 아래 사진과 같이 안드로이드에 내보내기에 필요한 `ADT(Android Developer Tools) <http://developer.android.com/tools/help/adt.html>`_ 라던가 `JDT(Java Development Kit) <http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html>`_ 등을 자동으로 설치합니다.

.. image:: http://i.imgur.com/yIRe9ro.png
        :scale: 100%

.. warning::
    ADT 업데이트 시에는 아래와 같이 정지 될 수 도 있습니다. 4,5분 정도 기다려 보시기 바랍니다.

    .. image:: http://i.imgur.com/83ZV5pk.png
        :scale: 100%

    .. image:: http://i.imgur.com/8nmv37f.png
        :scale: 100%

    .. image:: http://i.imgur.com/S0ZcPjZ.png
        :scale: 100%
        