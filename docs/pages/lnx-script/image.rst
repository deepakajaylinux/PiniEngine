.. PiniEngine documentation master file, created by
   sphinx-quickstart on Wed Dec 10 17:29:29 2014.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

:mod:`이미지`
======================================

-----------------------------------------------
이미지
-----------------------------------------------

.. function:: [이미지 아이디,파일명,위치,효과,효과시간,크기,연결,관계]

   화면에 이미지를 출력합니다.


.. attribute:: 아이디
   
   이미지의 아이디 입니다.

.. :param str 이미지: 이미지의 아이디 입니다.


.. py:function:: send_message(sender, recipient, message_body, [priority=1])

   Send a message to a recipient

   :param str sender: The person sending the message
   :param str recipient: The recipient of the message
   :param str message_body: The body of the message
   :param priority: The priority of the message, can be a number 1-5
   :type priority: integer or None
   :return: the message id
   :rtype: int
   :raises ValueError: if the message_body exceeds 160 characters
   :raises TypeError: if the message_body is not a basestring