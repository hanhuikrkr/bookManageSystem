package com.example.zombieboy.logindemo;

import android.annotation.SuppressLint;
import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.w3c.dom.Text;

/**
 * Created by Jay on 2015/8/28 0028.
 */
@SuppressLint("ValidFragment")
public class MyFragment extends Fragment {

    private LinearLayout L1;
    private LinearLayout L2;
    private LinearLayout L3;
    private LinearLayout L4;
    private LinearLayout person_l1;
    private LinearLayout person_l2;
    private LinearLayout person_l3;
    private LinearLayout person_l4;
    private TextView tv1;
    private TextView tv2;
    private TextView tv3;
    private TextView tv4;
    public MyFragment() {    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.myinfo_fg_content,container,false);
        // bind()
        L1 = (LinearLayout) view.findViewById(R.id.L1);
        L2 = (LinearLayout) view.findViewById(R.id.L2);
        L3 = (LinearLayout) view.findViewById(R.id.L3);
        L4 = (LinearLayout) view.findViewById(R.id.L4);
        person_l1 = (LinearLayout) view.findViewById(R.id.person_l1);
        person_l2 = (LinearLayout) view.findViewById(R.id.person_l2);
        person_l3 = (LinearLayout) view.findViewById(R.id.person_l3);
        person_l4 = (LinearLayout) view.findViewById(R.id.person_l4);
        tv1 = (TextView) view.findViewById(R.id.tv1);
        tv2 = (TextView) view.findViewById(R.id.tv2);
        tv3 = (TextView) view.findViewById(R.id.tv3);
        tv4 = (TextView) view.findViewById(R.id.tv4);

        // click
        L1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                L1.setBackgroundColor(getResources().getColor(R.color.qianlan));
                tv1.setTextColor(getResources().getColor(R.color.bg_white));
                person_l1.setVisibility(View.VISIBLE);

            }
        });
        L2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                L2.setBackgroundColor(getResources().getColor(R.color.qianlan));
                tv2.setTextColor(getResources().getColor(R.color.bg_white));
                person_l2.setVisibility(View.VISIBLE);
            }
        });
        L3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                L3.setBackgroundColor(getResources().getColor(R.color.qianlan));
                tv3.setTextColor(getResources().getColor(R.color.bg_white));
                person_l3.setVisibility(View.VISIBLE);
            }
        });
        L4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                L4.setBackgroundColor(getResources().getColor(R.color.qianlan));
                tv4.setTextColor(getResources().getColor(R.color.bg_white));
                person_l4.setVisibility(View.VISIBLE);
            }
        });

        return view;
    }
    public void initColor() {
        person_l1.setVisibility(View.GONE);
        person_l2.setVisibility(View.GONE);
        person_l3.setVisibility(View.GONE);
        person_l4.setVisibility(View.GONE);
        L1.setBackgroundColor(getResources().getColor(R.color.bg_white));
        tv1.setTextColor(getResources().getColor(R.color.bg_black));
        L2.setBackgroundColor(getResources().getColor(R.color.bg_white));
        tv2.setTextColor(getResources().getColor(R.color.bg_black));
        L3.setBackgroundColor(getResources().getColor(R.color.bg_white));
        tv3.setTextColor(getResources().getColor(R.color.bg_black));
        L4.setBackgroundColor(getResources().getColor(R.color.bg_white));
        tv4.setTextColor(getResources().getColor(R.color.bg_black));
    }
}
