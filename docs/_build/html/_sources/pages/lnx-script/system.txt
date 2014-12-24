.. PiniEngine documentation master file, created by
   sphinx-quickstart on Wed Dec 10 17:29:29 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

시스템 관련
**********************************************

.. _함수_화면초기화:

화면초기화 함수
===============================================

.. function:: [화면초기화]

   화면의 모든 오브젝트를 삭제합니다.

.. _함수_인자변수초기화:

인자변수초기화 함수
===============================================

.. function:: [인자변수초기화]

   현재까지 지정됬던 인자 변수들이 초기화 됩니다.

.. _함수_삭제:

삭제 함수
===============================================

.. function:: [삭제 아이디,효과]

   화면에 출력된 오브젝트 중 전달된 ``아이디`` 에 해당되는 오브젝트를 삭제합니다.

   :param 문자열 아이디: ( **필수** ) 삭제를 원하는 오브젝트의 고유 아이디를 전달해 주어야 합니다.
   :param 효과: 이 매개변수를 전달하면 전달된 ``아이디`` 에 해당되는 오브젝트를 원하는 :ref:`자료형_노드입장효과` 로 삭제할 수 있습니다. 전달된 ``효과`` 에 따라 화면에서 사라지게 됩니다.
   :type 효과: :ref:`자료형_노드입장효과`

예제
---------------------------------------------

.. raw:: html

    <script type="text/javascript">
    function copyCode()
    {
        window.clipboardData.setData('Text', "12345");
        alert("들어오긴 하는건가");
    }
    </script>
    <button onclick="copyCode()">복사하기</button>

.. image:: http://imgur.com/ryni1hi.png
.. image:: http://imgur.com/6k8DCpj.gif