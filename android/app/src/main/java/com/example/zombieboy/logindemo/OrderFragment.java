package com.example.zombieboy.logindemo;

import android.annotation.SuppressLint;
import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

/**
 * Created by Jay on 2015/8/28 0028.
 */
@SuppressLint("ValidFragment")
public class OrderFragment extends Fragment {

    private LinearLayout L1;
    private LinearLayout L2;
    private LinearLayout L3;
    private TextView tv1;
    private TextView tv2;
    private TextView tv3;
    public OrderFragment() {    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.order_fg_content,container,false);
        // bind()
        L1 = (LinearLayout) view.findViewById(R.id.L1);
        L2 = (LinearLayout) view.findViewById(R.id.L2);
        L3 = (LinearLayout) view.findViewById(R.id.L3);
        tv1 = (TextView) view.findViewById(R.id.tv1);
        tv2 = (TextView) view.findViewById(R.id.tv2);
        tv3 = (TextView) view.findViewById(R.id.tv3);

        // click
        L1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                L1.setBackgroundColor(getResources().getColor(R.color.qianlan));
                tv1.setTextColor(getResources().getColor(R.color.bg_white));
            }
        });
        L2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                L2.setBackgroundColor(getResources().getColor(R.color.qianlan));
                tv2.setTextColor(getResources().getColor(R.color.bg_white));
            }
        });
        L3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                L3.setBackgroundColor(getResources().getColor(R.color.qianlan));
                tv3.setTextColor(getResources().getColor(R.color.bg_white));
            }
        });

        return view;
    }
    public void initColor() {
        L1.setBackgroundColor(getResources().getColor(R.color.bg_white));
        tv1.setTextColor(getResources().getColor(R.color.bg_black));
        L2.setBackgroundColor(getResources().getColor(R.color.bg_white));
        tv2.setTextColor(getResources().getColor(R.color.bg_black));
        L3.setBackgroundColor(getResources().getColor(R.color.bg_white));
        tv3.setTextColor(getResources().getColor(R.color.bg_black));
    }
}
